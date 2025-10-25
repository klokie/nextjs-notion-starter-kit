import { type NextApiRequest, type NextApiResponse } from 'next'
import IORedis from 'ioredis'

import { isRedisEnabled, redisHost, redisPassword } from '@/lib/config'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = req.query.token
  if (token !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  if (!isRedisEnabled) {
    return res.status(400).json({ message: 'Redis is not enabled' })
  }

  const redis = new IORedis({
    host: redisHost,
    port: Number(process.env.REDIS_PORT) || 6379,
    password: redisPassword,
    maxRetriesPerRequest: 1,
    enableOfflineQueue: false
  })

  const pattern = (req.query.pattern as string) || 'preview-images:*'
  try {
    let cursor = '0'
    let totalDeleted = 0

    do {
      const [next, keys] = await redis.scan(
        cursor,
        'MATCH',
        pattern,
        'COUNT',
        1000
      )
      if (keys.length > 0) {
        totalDeleted += await redis.del(...keys)
      }
      cursor = next
    } while (cursor !== '0')

    await redis.quit()

    return res.json({ deleted: totalDeleted, pattern })
  } catch (e: any) {
    await redis.quit()
    return res
      .status(500)
      .json({ message: 'Error purging Redis', error: String(e) })
  }
}


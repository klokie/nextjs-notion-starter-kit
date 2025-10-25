import { type NextApiRequest, type NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = req.query.token
  if (token !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  // e.g. /api/revalidate?token=...&path=/blog/my-new-page
  const path = (req.query.path as string) || '/'

  try {
    await res.revalidate(path)
    // also revalidate the homepage / listing if useful:
    // await res.revalidate('/')
    return res.json({ revalidated: true, path })
  } catch (err: any) {
    return res
      .status(500)
      .json({ message: 'Error revalidating', error: String(err) })
  }
}


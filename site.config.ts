import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  // https://klokie.notion.site/Portfolio-e84239bffb1743c194d4615537673cce?pvs=4
  rootNotionPageId: 'e84239bffb1743c194d4615537673cce',
  // rootNotionPageId: '11a13c9e66e64f77a6210cfbe0422eac',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: 'klokie',

  // basic site info (required)
  name: 'Klokie.com',
  domain: 'klokie.com',
  author: 'Daniel “Klokie” Grossfeld',

  // open graph metadata (optional)
  description: `Daniel “Klokie” Grossfeld is a senior Web architect, full-stack developer and entrepreneur with 25+ years of experience engineering and designing complex data-driven websites, e-commerce, and media distribution systems within the music, video, online and print publishing, and fashion industries.`,

  // social usernames (optional)
  twitter: 'klokie',
  github: 'klokie',
  linkedin: 'klokie',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: true,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  navigationStyle: 'default'
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'About',
  //     pageId: 'f1199d37579b41cbabfc0b5174f4256a'
  //   },
  //   {
  //     title: 'Contact',
  //     pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
  //   }
  // ]
})

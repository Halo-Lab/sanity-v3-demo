export default {
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
      {
        name: 'blogHeroTitle',
        title: 'Blog Hero Title',
        type: 'string',
      },      
      {
        name: 'blogHeroDate',
        title: 'Blog Hero Date',
        type: 'string',
      },
      {
        name: 'blogHeroText',
        title: 'Blog Hero Text',
        type: 'string',
      },
      {
        name: 'blogHeroLinkName',
        title: 'Blog Hero Link Name',
        type: 'string',
      },
      {
        name: 'blogHeroLinkHref',
        title: 'Blog Hero Link Href',
        type: 'string',
      },
      {
        name: 'blogHeroImage',
        title: 'Blog Hero Image',
        type: 'image',
      },
      {
        name: 'blogHeroImageCover',
        title: 'Blog Hero Image Cover',
        type: 'image',
      },
      {
        name: 'latestPosts',
        title: 'Latest Posts',
        type: 'array',
        of: [{type: 'latestPost'}],
      },      
      {
        name: 'recommendPostsTitle',
        title: 'Recommend Posts Title',
        type: 'string',
      },      
      {
        name: 'recommendPostsSubTitle',
        title: 'Recommend Posts Sub Title',
        type: 'string',
      },      
    ],   
  }
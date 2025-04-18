export default {
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
      {
        name: 'blogHeroTitle',
        title: 'Blog Hero Title',
        type: 'string',
        hidden: true,
      },      
      {
        name: 'blogHeroTitleInt',
        title: 'Blog Hero Title',
        type: 'internationalizedArrayString',
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
        hidden: true,
      },
      {
        name: 'blogHeroTextInt',
        title: 'Blog Hero Text',
        type: 'internationalizedArrayString',
      },
      {
        name: 'blogHeroLinkName',
        title: 'Blog Hero Link Name',
        type: 'string',
        hidden: true,
      },
      {
        name: 'blogHeroLinkNameInt',
        title: 'Blog Hero Link Name',
        type: 'internationalizedArrayString',
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
        hidden: true,
      },      
      {
        name: 'recommendPostsTitleInt',
        title: 'Recommend Posts Title',
        type: 'internationalizedArrayString',
      },      
      {
        name: 'recommendPostsSubTitle',
        title: 'Recommend Posts Sub Title',
        type: 'string',
        hidden: true,
      },      
      {
        name: 'recommendPostsSubTitleInt',
        title: 'Recommend Posts Sub Title',
        type: 'internationalizedArrayString',
      },      
    ],   
  }
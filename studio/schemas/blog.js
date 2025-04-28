export default {
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [     
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
        name: 'blogHeroTextInt',
        title: 'Blog Hero Text',
        type: 'internationalizedArrayString',
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
        name: 'recommendPostsTitleInt',
        title: 'Recommend Posts Title',
        type: 'internationalizedArrayString',
      },           
      {
        name: 'recommendPostsSubTitleInt',
        title: 'Recommend Posts Sub Title',
        type: 'internationalizedArrayString',
      },      
    ],   
  }
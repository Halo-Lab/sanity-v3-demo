export default {
  name: 'latestPost',
  title: 'Latest Post',  
  type: 'object',
  fields: [    
    {
      name: 'latestPostsImage',
      title: 'Latest Posts Image',
      type: 'image',
    },
    {
      name: 'latestPostsImageCover',
      title: 'Latest Posts Image Cover',
      type: 'image',
    },
    {
      name: 'latestPostsTitle',
      title: 'Latest Posts Title',
      type: 'string',
      hidden: true,
    },
    {
      name: 'latestPostsTitleInt',
      title: 'Latest Posts Title',
      type: 'internationalizedArrayString',
    },
    {
      name: 'latestPostsDate',
      title: 'Latest Posts Date',
      type: 'string',
    },
    {
      name: 'latestPostsText',
      title: 'Latest Posts Text',
      type: 'string',
      hidden: true,
    },
    {
      name: 'latestPostsTextInt',
      title: 'Latest Posts Text',
      type: 'internationalizedArrayString',
    },
    {
      name: 'latestPostsLink',
      title: 'Latest Posts Link',
      type: 'string',
    },
  ],
}

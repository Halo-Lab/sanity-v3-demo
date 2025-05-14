
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'latestPost',
  title: 'Latest Post',  
  type: 'object',
  fields: [    
    defineField({
      name: 'latestPostsImage',
      title: 'Latest Posts Image',
      type: 'image',
    }),
    defineField({
      name: 'latestPostsImageCover',
      title: 'Latest Posts Image Cover',
      type: 'image',
    }),
    defineField({
      name: 'latestPostsTitleInt',
      title: 'Latest Posts Title',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'latestPostsDate',
      title: 'Latest Posts Date',
      type: 'string',
    }),
    defineField({
      name: 'latestPostsTextInt',
      title: 'Latest Posts Text',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'latestPostsLink',
      title: 'Latest Posts Link',
      type: 'string',
    }),
  ],
});

import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'blog',
    title: 'Blog',
    type: 'document',
    groups: [
      {
        name: 'content',
        title: 'Content',
        default: true,
      },
      {
        name: 'seo',
        title: 'SEO',
        default: false,
      },
    ],
    fields: [  
      defineField({
        name: 'seo',
        title: 'SEO',
        type: 'seo',
        group: 'seo',
      }), 
      defineField({
        name: 'blogHeroTitleInt',
        title: 'Blog Hero Title',
        type: 'internationalizedArrayString',
        group: 'content',
      }),      
      defineField({
        name: 'blogHeroDate',
        title: 'Blog Hero Date',
        type: 'string',
        group: 'content',
      }),
      defineField({
        name: 'blogHeroTextInt',
        title: 'Blog Hero Text',
        type: 'internationalizedArrayString',
        group: 'content',
      }),
      defineField({
        name: 'blogHeroLinkNameInt',
        title: 'Blog Hero Link Name',
        type: 'internationalizedArrayString',
        group: 'content',
      }),
      defineField({
        name: 'blogHeroLinkHref',
        title: 'Blog Hero Link Href',
        type: 'string',
        group: 'content',
      }),
      defineField({
        name: 'blogHeroImage',
        title: 'Blog Hero Image',
        type: 'image',
        group: 'content',
      }),
      defineField({
        name: 'blogHeroImageCover',
        title: 'Blog Hero Image Cover',
        type: 'image',
        group: 'content',
      }),
      defineField({
        name: 'latestPosts',
        title: 'Latest Posts',
        type: 'array',
        of: [{type: 'latestPost'}],
        group: 'content',
      }),
      defineField({
        name: 'recommendPostsTitleInt',
        title: 'Recommend Posts Title',
        type: 'internationalizedArrayString',
        group: 'content',
      }),           
      defineField({
        name: 'recommendPostsSubTitleInt',
        title: 'Recommend Posts Sub Title',
        type: 'internationalizedArrayString',
        group: 'content',
      }),      
    ],   
  });
  
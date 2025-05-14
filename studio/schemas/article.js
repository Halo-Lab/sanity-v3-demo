import { defineField, defineType } from 'sanity';
import { DocumentIcon } from '@sanity/icons';

export default defineType({
    name: 'article',
    title: 'Article',
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
        name: 'titleInt',
        title: 'Title',
        type: 'internationalizedArrayString',
        group: 'content',
      }),
      defineField({
        name: 'date',
        title: 'Date',
        type: 'date',
        group: 'content',
      }),
      defineField({
        name: 'contentInt',
        title: 'Text',
        type: 'internationalizedArrayText',
        group: 'content',
      }),
      defineField({
        name: 'link',
        title: 'Link',
        type: 'slug',
        options: {
          source: 'titleInt.0.value',
        },
        group: 'content',
      }),
      defineField({
        name: 'image',
        title: 'Article Image',
        type: 'image',
        group: 'content',
      }),
      defineField({
        name: 'imageCover',
        title: 'Article Image Cover',
        type: 'image',
        group: 'content',
      }),
      defineField({
        name: 'recommended',
        title: 'Recommended Articles',
        type: 'array',
        of: [{type: 'reference', to: [{type: 'article'}]}],
        group: 'content',
        validation: (Rule) => Rule.max(3),
      }),    
    ], 
    preview: {
        select: {
            title: "titleInt",
            media: "imageCover",
        },
        prepare({title, media}) {
            return {
                title: title[0].value,
                media: media || DocumentIcon, 
            };
        },
    },  
  });
  
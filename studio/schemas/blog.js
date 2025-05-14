import { defineField, defineType } from 'sanity';
import { DocumentIcon } from '@sanity/icons';

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
        name: 'mainArticle',
        title: 'Main Article',
        type: 'reference',
        to: [{type: 'article'}],
        group: 'content',
        validation: (Rule) => Rule.required(),
      }),  
      defineField({
        name: 'mainArticleLink',
        title: 'Main Article Link',
        type: 'internationalizedArrayString',
        group: 'content',
      }),
      defineField({
        name: 'recommendedArticlesTitle',
        title: 'Recommended Articles Title',
        type: 'internationalizedArrayString',
        group: 'content',
      }),
      defineField({
        name: 'recommendedArticlesSubTitle',
        title: 'Recommended Articles Sub Title',
        type: 'internationalizedArrayString',
        group: 'content',
      }),
    ], 
    preview: {
      prepare() {
        return {
          title: "Blog",
          media: DocumentIcon,
        };
      },
    },
  });
  
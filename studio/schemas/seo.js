import { defineField, defineType } from 'sanity';

const seo = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'SEO Title',
      type: 'internationalizedArrayString',
      description: 'Title for SEO and social sharing',
    }),
    defineField({
      name: 'description',
      title: 'SEO Description',
      type: 'internationalizedArrayString',
      description: 'Description for SEO and social sharing',
    }),
    defineField({
      name: 'image',
      title: 'SEO Image',
      type: 'image',
      description: 'Image for social sharing (Open Graph, Twitter Card, etc.)',
    }),
  ],
});

export default seo; 
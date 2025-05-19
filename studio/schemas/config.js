import { defineField, defineType } from 'sanity';

const config = defineType({
  name: 'config',
  title: 'Config',
  type: 'document',
  fields: [

    defineField({
      name: 'header',
      title: 'Header',
      type: 'object',
      fields: [
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
          }),
        defineField({
          name: 'navigation',
          title: 'Navigation',
          type: 'object',
          fields: [
            defineField({
              name: 'navigation',
              title: 'Navigation',
              type: 'array',
              of: [{type: 'object',
                fields: [
                  defineField({
                name: 'linkNameInt',
                title: 'Link Name',
                    type: 'internationalizedArrayString',
                  }),
                  defineField({
                    name: 'link',
                    title: 'Link',
                    type: 'reference',
                    to: [{type: 'blog'}, {type: 'home'}],
                  }),
                ],
                preview: {
                  select: {
                    title: 'linkNameInt',
                    subtitle: 'link',
                  },
                  prepare({title}) {
                    return {
                      title: title[0].value,
                      
                    };
                  },
                },
              }],
            }),
          ],
        }),
        defineField({
            name: 'buttonLink',
            title: 'Button Link',
            type: 'string',
          }),      
          defineField({
            name: 'buttonTextInt',
            title: 'Button Text',
            type: 'internationalizedArrayString',
          }),
      ],
    }),
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'object',
      fields: [
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
          }),
          defineField({
            name: 'footerTextInt',
            title: 'Footer Text',
            type: 'internationalizedArrayString',
          }),
          defineField({
            name: 'footerHaloText',
            title: 'Footer Halo Text',
            type: 'string',
          }),
          defineField({
            name: 'footerHaloLogo',
            title: 'Footer Halo Logo',
            type: 'image',
          }),
      ],
    }),
    defineField({
        name: 'socials',
        title: 'Socials',
        type: 'object',
        fields: [
          defineField({
            name: 'socials',
            title: 'Socials',
            type: 'array',
            of: [{type: 'object',
              fields: [
                defineField({
                    name: 'name',
                    title: 'Name',
                  type: 'string',
                }),
                defineField({
                  name: 'url',
                  title: 'URL',
                  type: 'string',
                }),
                defineField({
                  name: 'icon',
                  title: 'Icon',
                  type: 'image',
                }),
              ],
            }],
          }),
        ],
      }),
  ],
});

export default config; 
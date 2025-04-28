import {RocketIcon} from '@sanity/icons'
import { defineField, defineType } from "sanity";

export const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  icon: RocketIcon,
  fields: [
    defineField({
      name: 'heroTitleInt',
      title: 'Hero Title',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'heroTextInt',
      title: 'Hero Text',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'heroButtonInt',
      title: 'Hero Button',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'heroButtonHref',
      title: 'Hero Button Href',
      type: 'string',
    }),
    defineField({
      name: 'heroLinkInt',
      title: 'Hero Link',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'heroLinkHref',
      title: 'Hero Link Href',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
    }),
  ],
  preview: {
    select: {
        title: "heroTitleInt",
    },
    prepare({ title }) {
        return {
            title: "Hero Section",
            subtitle: `${title[0].value || ""}`,
            media: RocketIcon,
        };
    },
},
})

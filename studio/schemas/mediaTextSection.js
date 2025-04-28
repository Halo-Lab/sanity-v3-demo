import {ImageIcon} from '@sanity/icons'
import { defineField, defineType } from "sanity";

export const mediaTextSection = defineType({
  name: 'mediaTextSection',
  title: 'Media and Text Section',
  type: 'object',
  icon: ImageIcon,
  fields: [
    defineField({
        name: 'mobileAppTitle',
        title: 'Mobile App Title',
        type: 'string',
        hidden: true,
      }),
      defineField({
        name: 'titleInt',
        title: 'Title',
        type: 'internationalizedArrayString',
      }),
      defineField({
        name: 'mobileAppSubTitle',
        title: 'Mobile App Sub Title',
        type: 'string',
        hidden: true,
      }),
      defineField({
        name: 'subTitleInt',
        title: 'Sub Title',
        type: 'internationalizedArrayString',
      }),
      defineField({
        name: 'mobileAppText',
        title: 'Mobile App Text',
        type: 'string',
        hidden: true,
      }),
      defineField({
        name: 'textInt',
        title: 'Text',
        type: 'internationalizedArrayString',
      }),
      defineField({
        name: 'mobileAppButton',
        title: 'Mobile App Button',
        type: 'string',
        hidden: true,
      }),
      defineField({
        name: 'buttonInt',
        title: 'Button Text',
        type: 'internationalizedArrayString',
      }),
      defineField({
        name: 'image',
        title: 'Image',
        type: 'image',
      }),
      defineField({
        name: 'mediaItems',
        title: 'Media Items',
        type: 'array',
        of: [{type: 'mediaItem'}],
      }),
  ],
  preview: {
    select: {
        title: "titleInt",
    },
    prepare({ title }) {
        return {
            title: "Media and Text Section",
            subtitle: `${title[0].value || ""}`,
            media: ImageIcon,
        };
    },
},
})

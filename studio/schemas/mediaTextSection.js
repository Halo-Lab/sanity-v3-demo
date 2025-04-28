import {ImageIcon} from '@sanity/icons'
import { defineField, defineType } from "sanity";

export const mediaTextSection = defineType({
  name: 'mediaTextSection',
  title: 'Media and Text Section',
  type: 'object',
  icon: ImageIcon,
  fields: [
      defineField({
        name: 'titleInt',
        title: 'Title',
        type: 'internationalizedArrayString',
      }),
      defineField({
        name: 'subTitleInt',
        title: 'Sub Title',
        type: 'internationalizedArrayString',
      }),
      defineField({
        name: 'textInt',
        title: 'Text',
        type: 'internationalizedArrayString',
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

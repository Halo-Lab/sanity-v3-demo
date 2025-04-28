import {SyncIcon} from '@sanity/icons'
import { defineField, defineType } from "sanity";

export const conversionSection = defineType({
  name: 'conversionSection',
  title: 'Conversion Section',
  type: 'object',
  icon: SyncIcon,
  fields: [
    defineField({
        name: 'conversionSubTitleInt',
        title: 'Conversion Sub Title',
        type: 'internationalizedArrayString',
      }),
      defineField({
        name: 'conversionTrialInt',
        title: 'Conversion Trial',
        type: 'internationalizedArrayString',
      }),
      defineField({
        name: 'conversionPlaceholderInt',
        title: 'Conversion Placeholder',
        type: 'internationalizedArrayString',
      }),
      defineField({
        name: 'conversionTaglineInt',
        title: 'Conversion Tagline',
        type: 'internationalizedArrayString',
      }),
      defineField({
        name: 'conversionTaglineLogo',
        title: 'Conversion Tagline Logo',
        type: 'image',
      }),
      defineField({
        name: 'conversionImage',
        title: 'Conversion Image',
        type: 'image',
      }),
  ],
  preview: {
    select: {
        title: "conversionSubTitleInt",
    },
    prepare({ title }) {
        return {
            title: "Conversion Section",
            subtitle: `${title[0].value || ""}`,
            media: SyncIcon,
        };
    },
},
})

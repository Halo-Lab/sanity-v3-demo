import {BarChartIcon} from '@sanity/icons'
import { defineField, defineType } from "sanity";

export const statsSection = defineType({
  name: 'statsSection',
  title: 'Stats Section',
  type: 'object',
  icon: BarChartIcon,
  fields: [
      defineField({
        name: 'statsTitleInt',
        title: 'Stats Title',
        type: 'internationalizedArrayString',
      }),
      defineField({
        name: 'statsSubTitleInt',
        title: 'Stats Sub Title',
        type: 'internationalizedArrayString',
      }),
      defineField({
        name: 'statsItems',
        title: 'Stats Items',
        type: 'array',
        of: [{type: 'statsItem'}],
      }),
  ],
  preview: {
    select: {
        title: "statsTitleInt",
    },
    prepare({ title }) {
        return {
            title: "Stats Section",
            subtitle: `${title[0].value || ""}`,
            media: BarChartIcon,
        };
    },
},
})

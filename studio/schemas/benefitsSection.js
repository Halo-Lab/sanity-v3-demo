import {SparklesIcon} from '@sanity/icons'
import { defineField, defineType } from "sanity";

export const benefitsSection = defineType({
  name: 'benefitsSection',
  title: 'Benefits Section',
  type: 'object',
  icon: SparklesIcon,
  fields: [
    defineField({
        name: 'benefitsTitle',
        title: 'Benefits Title',
        type: 'string',
        hidden: true,
      }),
      defineField({
        name: 'benefitsTitleInt',
        title: 'Benefits Title',
        type: 'internationalizedArrayString',
      }),
      defineField({
        name: 'benefitsSubTitle',
        title: 'Benefits Sub Title',
        type: 'string',
        hidden: true,
      }),
      defineField({
        name: 'benefitsSubTitleInt',
        title: 'Benefits Sub Title',
        type: 'internationalizedArrayString',
      }),
      defineField({
        name: 'buttonShowText',
        title: 'Button Show Text',
        type: 'string',
        hidden: true,
      }),
      defineField({
        name: 'buttonShowTextInt',
        title: 'Button Show Text',
        type: 'internationalizedArrayString',
      }),
      defineField({
        name: 'buttonHiddenText',
        title: 'Button Hidden Text',
        type: 'string',
        hidden: true,
      }),
      defineField({
        name: 'buttonHiddenTextInt',
        title: 'Button Hidden Text',
        type: 'internationalizedArrayString',
      }),
      defineField({
        name: 'benefitsItems',
        title: 'Benefits Items',
        type: 'array',
        of: [{type: 'benefitsItem'}],
      }),
  ],
  preview: {
    select: {
        title: "benefitsTitleInt",
    },
    prepare({ title }) {
        return {
            title: "Benefits Section",
            subtitle: `${title[0].value || ""}`,
            media: SparklesIcon,
        };
    },
},
})

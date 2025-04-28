import {CaseIcon} from '@sanity/icons'
import { defineField, defineType } from "sanity";

export const partnersSection = defineType({
  name: 'partnersSection',
  title: 'Partners Section',
  type: 'object',
  icon: CaseIcon,
  fields: [
  defineField({
        name: 'partnersTitle',
        title: 'Partners Title',
        type: 'string',
        hidden: true,
      }),
      defineField({
        name: 'partnersTitleInt',
        title: 'Partners Title',
        type: 'internationalizedArrayString',
      }),
      defineField({
        name: 'partnersSubTitle',
        title: 'Partners Sub Title',
        type: 'string',
        hidden: true,
      }),   
      defineField({
        name: 'partnersSubTitleInt',
        title: 'Partners Sub Title',
        type: 'internationalizedArrayString',
      }),
      defineField({
        name: 'partnersItems',
        title: 'Partners Items',
        type: 'array',
        of: [{type: 'partnersItem'}],
      }),
  ],
  preview: {
    select: {
        title: "partnersTitleInt",
    },
    prepare({ title }) {
        return {
            title: "Partners Section",
            subtitle: `${title[0].value || ""}`,
            media: CaseIcon,
        };
    },
},
})

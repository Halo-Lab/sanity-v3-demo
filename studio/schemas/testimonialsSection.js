import {StarIcon} from '@sanity/icons'
import { defineField, defineType } from "sanity";

export const testimonialsSection = defineType({
  name: 'testimonialsSection',
  title: 'Testimonials Section',
  type: 'object',
  icon: StarIcon,
  fields: [
    defineField({
        name: 'testimonialsTitle',
        title: 'Testimonials Title',
        type: 'string',
        hidden: true,
      }),
      defineField({
        name: 'testimonialsTitleInt',
        title: 'Testimonials Title',
        type: 'internationalizedArrayString',
      }),
      defineField({
        name: 'testimonialsSubTitle',
        title: 'Testimonials Sub Title',
        type: 'string',
        hidden: true,
      }),
      defineField({
        name: 'testimonialsSubTitleInt',
        title: 'Testimonials Sub Title',
        type: 'internationalizedArrayString',
      }),
      defineField({
        name: 'testimonialsItems',
        title: 'Testimonials Items',
        type: 'array',
        of: [{type: 'testimonialsItem'}],
      }),
  ],
  preview: {
    select: {
        title: "testimonialsTitleInt",
    },
    prepare({ title }) {
        return {
            title: "Testimonials Section",
            subtitle: `${title[0].value || ""}`,
            media: StarIcon,
        };
    },
},
})

import { defineField, defineType } from "sanity";
import {HomeIcon} from '@sanity/icons'

export default defineType({
    name: 'home',
    title: 'Home',
    type: 'document',
    groups: [
      {
        name: 'content',
        title: 'Content',
        default: true,
      },
      {
        name: 'seo',
        title: 'SEO',
        default: false,
      },
    ],
    fields: [
      defineField({
        name: 'seo',
        title: 'SEO',
        type: 'seo',
        group: 'seo',
      }),
      defineField({
        name: "content",
        type: "array",
        title: "Content",
        description: "Add and arrange sections to build your page",
        group: 'content',
        of: [
          { type: "heroSection" },
          { type: "benefitsSection" },
          { type: "statsSection" },
          { type: "mediaTextSection" },
          { type: "testimonialsSection" },
          { type: "partnersSection" },
          { type: "conversionSection" },
        ],
      }),
    ],  
    preview: {

      prepare() {
          return {
              title: "Home Page",
              media: HomeIcon,
          };
      },
  },
  })
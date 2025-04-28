export default {
  name: 'benefitsItem',
  title: 'Benefits Item',  
  type: 'object',
  fields: [    
    {
      name: 'benefitsCardLogo',
      title: 'Benefits Card Logo',
      type: 'image',
    },
    {
      name: 'benefitsCardTitleInt',
      title: 'Benefits Card Title',
      type: 'internationalizedArrayString',
    },
    {
      name: 'benefitsCardTextInt',
      title: 'Benefits Card Text',
      type: 'internationalizedArrayString',
    },
    {
      name: 'benefitsCardLinkInt',
      title: 'Benefits Card Link',
      type: 'internationalizedArrayString',
    },
  ],
  preview: {
    select: {
        title: "benefitsCardTitleInt",
        media: "benefitsCardLogo",
    },
    prepare({ title, media }) {
        return {
            title: `${title[0].value || ""}`,
            media,
        };
    },
},
}

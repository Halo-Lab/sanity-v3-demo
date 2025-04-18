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
      name: 'benefitsCardTitle',
      title: 'Benefits Card Title',
      type: 'string',
      hidden: true,
    },
    {
      name: 'benefitsCardTitleInt',
      title: 'Benefits Card Title',
      type: 'internationalizedArrayString',
    },
    {
      name: 'benefitsCardText',
      title: 'Benefits Card Text',
      type: 'string',
      hidden: true,
    },
    {
      name: 'benefitsCardTextInt',
      title: 'Benefits Card Text',
      type: 'internationalizedArrayString',
    },
    {
      name: 'benefitsCardLink',
      title: 'Benefits Card Link',
      type: 'string',
      hidden: true,
    },
    {
      name: 'benefitsCardLinkInt',
      title: 'Benefits Card Link',
      type: 'internationalizedArrayString',
    },
  ],
}

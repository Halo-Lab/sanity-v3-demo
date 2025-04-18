export default {
  name: 'navItem',
  title: 'Nav Item',  
  type: 'object',
  fields: [
    {
      name: 'linkHref',
      title: 'Link Href',
      type: 'string',
    },
    {
      name: 'linkName',
      title: 'Link Name',
      type: 'string',
      hidden: true,
    },
    {
      name: 'linkNameInt',
      title: 'Link Name',
      type: 'internationalizedArrayString',
    },
  ],
}

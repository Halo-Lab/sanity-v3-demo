export default {
  name: 'statsItem',
  title: 'Stats Item',  
  type: 'object',
  fields: [
    {
      name: 'statsNumber',
      title: 'Stats Number',
      type: 'string',
    },
    {
      name: 'statsNumberDescription',
      title: 'Stats Number Description',
      type: 'string',
      hidden: true,
    },
    {
      name: 'statsNumberDescriptionInt',
      title: 'Stats Number Description',
      type: 'internationalizedArrayString',
    },
  ],
}

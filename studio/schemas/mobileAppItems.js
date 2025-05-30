export default {
  name: 'mediaItem',
  title: 'Media Item',  
  type: 'object',
  fields: [
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },   
    {
      name: 'textInt',
      title: 'Mobile App Function Text',
      type: 'internationalizedArrayString',
    },    
  ],
  preview: {
    select: {
        title: "textInt",
        media: "logo",
    },
    prepare({ title, media }) {
        return {
            title: `${title[0].value || ""}`,
            media,
        };
    },
},
}

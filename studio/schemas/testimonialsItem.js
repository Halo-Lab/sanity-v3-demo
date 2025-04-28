export default {
  name: 'testimonialsItem',
  title: 'Testimonials Item',  
  type: 'object',
  fields: [
    {
      name: 'testimonialsCardLogo',
      title: 'Testimonials Card Logo',
      type: 'image',
    },
    {
      name: 'testimonialsStarCount',
      title: 'Testimonials Star Count',
      type: 'number',
    },
    {
      name: 'testimonialsCardTextInt',
      title: 'Testimonials Card Text',
      type: 'internationalizedArrayString',
    },
    {
      name: 'testimonialsCardSignInt',
      title: 'Testimonials Card Sign',
      type: 'internationalizedArrayString',
    },
    {
      name: 'testimonialsCardProfessionInt',
      title: 'Testimonials Card Profession',
      type: 'internationalizedArrayString',
    },
  ],
  preview: {
    select: {
        title: "testimonialsCardTextInt",
        media: "testimonialsCardLogo",
    },
    prepare({ title, media }) {
        return {
            title: `${title[0].value || ""}`,
            media,
        };
    },
},
}

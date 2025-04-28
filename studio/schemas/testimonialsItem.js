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
      name: 'testimonialsCardText',
      title: 'Testimonials Card Text',
      type: 'string',
      hidden: true,
    },
    {
      name: 'testimonialsCardTextInt',
      title: 'Testimonials Card Text',
      type: 'internationalizedArrayString',
    },
    {
      name: 'testimonialsCardSign',
      title: 'Testimonials Card Sign',
      type: 'string',
      hidden: true,
    },
    {
      name: 'testimonialsCardSignInt',
      title: 'Testimonials Card Sign',
      type: 'internationalizedArrayString',
    },
    {
      name: 'testimonialsCardProfession',
      title: 'Testimonials Card Profession',
      type: 'string',
      hidden: true,
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

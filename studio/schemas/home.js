export default {
    name: 'home',
    title: 'Home',
    type: 'document',
    fields: [
      {
        name: 'heroTitle',
        title: 'Hero Title',
        type: 'string',
      },      
      {
        name: 'heroText',
        title: 'Hero Text',
        type: 'string',
      },
      {
        name: 'heroButton',
        title: 'Hero Button',
        type: 'string',
      },
      {
        name: 'heroButtonHref',
        title: 'Hero Button Href',
        type: 'string',
      },
      {
        name: 'heroLink',
        title: 'Hero Link',
        type: 'string',
      },
      {
        name: 'heroLinkHref',
        title: 'Hero Link Href',
        type: 'string',
      },
      {
        name: 'heroImage',
        title: 'Hero Image',
        type: 'image',
      },
      {
        name: 'partnersTitle',
        title: 'Partners Title',
        type: 'string',
      },
      {
        name: 'partnersSubTitle',
        title: 'Partners Sub Title',
        type: 'string',
      },
      {
        name: 'partnersItems',
        title: 'Partners Items',
        type: 'array',
        of: [{type: 'partnersItem'}],
      },
      {
        name: 'benefitsTitle',
        title: 'Benefits Title',
        type: 'string',
      },
      {
        name: 'benefitsSubTitle',
        title: 'Benefits Sub Title',
        type: 'string',
      },
      {
        name: 'buttonShowText',
        title: 'Button Show Text',
        type: 'string',
      },
      {
        name: 'buttonHiddenText',
        title: 'Button Hidden Text',
        type: 'string',
      },
      {
        name: 'benefitsItems',
        title: 'Benefits Items',
        type: 'array',
        of: [{type: 'benefitsItem'}],
      },
      {
        name: 'statsTitle',
        title: 'Stats Title',
        type: 'string',
      },
      {
        name: 'statsSubTitle',
        title: 'Stats Sub Title',
        type: 'string',
      },
      {
        name: 'statsItems',
        title: 'Stats Items',
        type: 'array',
        of: [{type: 'statsItem'}],
      },
      {
        name: 'mobileAppTitle',
        title: 'Mobile App Title',
        type: 'string',
      },
      {
        name: 'mobileAppSubTitle',
        title: 'Mobile App Sub Title',
        type: 'string',
      },
      {
        name: 'mobileAppText',
        title: 'Mobile App Text',
        type: 'string',
      },
      {
        name: 'mobileAppButton',
        title: 'Mobile App Button',
        type: 'string',
      },
      {
        name: 'mobileAppImage',
        title: 'Mobile App Image',
        type: 'image',
      },
      {
        name: 'mobileAppItems',
        title: 'Mobile App Items',
        type: 'array',
        of: [{type: 'mobileAppItem'}],
      },
      {
        name: 'testimonialsTitle',
        title: 'Testimonials Title',
        type: 'string',
      },
      {
        name: 'testimonialsSubTitle',
        title: 'Testimonials Sub Title',
        type: 'string',
      },
      {
        name: 'testimonialsItems',
        title: 'Testimonials Items',
        type: 'array',
        of: [{type: 'testimonialsItem'}],
      },



    ],   
  }
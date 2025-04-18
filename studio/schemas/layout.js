export default {
    name: 'layout',
    title: 'Layout',
    type: 'document',
    fields: [
      {
        name: 'logo',
        title: 'Logo',
        type: 'image',
      },
      {
        name: 'buttonLink',
        title: 'Button Link',
        type: 'string',
      },      
      {
        name: 'buttonText',
        title: 'Button Text',
        type: 'string',
        hidden: true,
      },
      {
        name: 'buttonTextInt',
        title: 'Button Text',
        type: 'internationalizedArrayString',
      },
      {
        name: 'navItems',
        title: 'Nav Items',
        type: 'array',
        of: [{type: 'navItem'}],
      },
      {
        name: 'conversionSubTitle',
        title: 'Conversion Sub Title',
        type: 'string',
        hidden: true,
      },
      {
        name: 'conversionSubTitleInt',
        title: 'Conversion Sub Title',
        type: 'internationalizedArrayString',
      },
      {
        name: 'conversionTrial',
        title: 'Conversion Trial',
        type: 'string',
        hidden: true,
      },
      {
        name: 'conversionTrialInt',
        title: 'Conversion Trial',
        type: 'internationalizedArrayString',
      },
      {
        name: 'conversionPlaceholder',
        title: 'Conversion Placeholder',
        type: 'string',
        hidden: true,
      },
      {
        name: 'conversionPlaceholderInt',
        title: 'Conversion Placeholder',
        type: 'internationalizedArrayString',
      },
      {
        name: 'conversionTagline',
        title: 'Conversion Tagline',
        type: 'string',
        hidden: true,
      },
      {
        name: 'conversionTaglineInt',
        title: 'Conversion Tagline',
        type: 'internationalizedArrayString',
      },
      {
        name: 'conversionTaglineLogo',
        title: 'Conversion Tagline Logo',
        type: 'image',
      },
      {
        name: 'conversionImage',
        title: 'Conversion Image',
        type: 'image',
      },
      {
        name: 'footerLogo',
        title: 'Footer Logo',
        type: 'image',
      },
      {
        name: 'footerText',
        title: 'Footer Text',
        type: 'string',
        hidden: true,
      },
      {
        name: 'footerTextInt',
        title: 'Footer Text',
        type: 'internationalizedArrayString',
      },
      {
        name: 'footerHaloText',
        title: 'Footer Halo Text',
        type: 'string',
      },
      {
        name: 'footerHaloLogo',
        title: 'Footer Halo Logo',
        type: 'image',
      },
      {
        name: 'footerItems',
        title: 'Footer Items',
        type: 'array',
        of: [{type: 'footerItem'}],
      },
    ],   
  }
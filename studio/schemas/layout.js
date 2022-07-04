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
      },
      {
        name: 'conversionTrial',
        title: 'Conversion Trial',
        type: 'string',
      },
      {
        name: 'conversionPlaceholder',
        title: 'Conversion Placeholder',
        type: 'string',
      },
      {
        name: 'conversionTagline',
        title: 'Conversion Tagline',
        type: 'string',
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
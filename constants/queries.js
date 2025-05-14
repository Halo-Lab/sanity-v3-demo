import { groq } from 'next-sanity';

export const HERO_SECTION_QUERY = `
  _type == "heroSection" => {
    ...,
    "heroButton": heroButtonInt[_key == $lang][0].value,
    "heroLink": heroLinkInt[_key == $lang][0].value,
    "heroText": heroTextInt[_key == $lang][0].value,
    "heroTitle": heroTitleInt[_key == $lang][0].value,
  }
`;

export const BENEFITS_SECTION_QUERY = `
  _type == "benefitsSection" => {
    ...,
    "benefitsItems": benefitsItems[] {
      ...,
      "benefitsCardLink": benefitsCardLinkInt[_key == $lang][0].value,
      "benefitsCardText": benefitsCardTextInt[_key == $lang][0].value,
      "benefitsCardTitle": benefitsCardTitleInt[_key == $lang][0].value,
    },
    "benefitsSubTitle": benefitsSubTitleInt[_key == $lang][0].value,
    "benefitsTitle": benefitsTitleInt[_key == $lang][0].value,
    "buttonHiddenText": buttonHiddenTextInt[_key == $lang][0].value,
    "buttonShowText": buttonShowTextInt[_key == $lang][0].value,
  }
`;

export const STATS_SECTION_QUERY = `
  _type == "statsSection" => {
    ...,
    "statsSubTitle": statsSubTitleInt[_key == $lang][0].value,
    "statsTitle": statsTitleInt[_key == $lang][0].value,
    "statsItems": statsItems[] {
      ...,
      "statsNumberDescription": statsNumberDescriptionInt[_key == $lang][0].value,
    },
  }
`;

export const MEDIA_TEXT_SECTION_QUERY = `
  _type == "mediaTextSection" => {
    ...,
    "button": buttonInt[_key == $lang][0].value,
    "subTitle": subTitleInt[_key == $lang][0].value,
    "text": textInt[_key == $lang][0].value,
    "title": titleInt[_key == $lang][0].value,
    "mediaItems": mediaItems[] {
      ...,
      "text": textInt[_key == $lang][0].value,
    },
  }
`;

export const TESTIMONIALS_SECTION_QUERY = `
  _type == "testimonialsSection" => {
    ...,
    "testimonialsSubTitle": testimonialsSubTitleInt[_key == $lang][0].value,
    "testimonialsTitle": testimonialsTitleInt[_key == $lang][0].value,
    "testimonialsItems": testimonialsItems[] {
      ...,
      "testimonialsCardProfession": testimonialsCardProfessionInt[_key == $lang][0].value,
      "testimonialsCardSign": testimonialsCardSignInt[_key == $lang][0].value,
      "testimonialsCardText": testimonialsCardTextInt[_key == $lang][0].value,
    },
  }
`;

export const PARTNERS_SECTION_QUERY = `
  _type == "partnersSection" => {
    ...,
    "partnersSubTitle": partnersSubTitleInt[_key == $lang][0].value,
    "partnersTitle": partnersTitleInt[_key == $lang][0].value,
  }
`;

export const CONVERSION_SECTION_QUERY = `
  _type == "conversionSection" => {
    ...,
    "conversionPlaceholder": conversionPlaceholderInt[_key == $lang][0].value,
      "conversionSubTitle": conversionSubTitleInt[_key == $lang][0].value,
      "conversionTagline": conversionTaglineInt[_key == $lang][0].value,
      "conversionTrial": conversionTrialInt[_key == $lang][0].value,
  }
`;

export const HOME_PAGE_SECTIONS_QUERY = groq`*[_type == "home"] {
  "seo": seo{
    ...,
    "title": title[_key == $lang][0].value,
    "description": description[_key == $lang][0].value,
    "image": image
  },
  "content": content[] {
    ${HERO_SECTION_QUERY},
    ${BENEFITS_SECTION_QUERY},
    ${STATS_SECTION_QUERY},
    ${MEDIA_TEXT_SECTION_QUERY},
    ${TESTIMONIALS_SECTION_QUERY},
    ${PARTNERS_SECTION_QUERY},
    ${CONVERSION_SECTION_QUERY},
  }
}`;

export const BLOG_PAGE_SEO_QUERY = groq`*[_type == "blog"][0] {
  "seo": seo{
    _id,
    "title": title[_key == $lang][0].value,
    "description": description[_key == $lang][0].value,
    "image": image
  },
}`;

export const BLOG_PAGE_QUERY = groq`*[_type == "blog"][0] {
  "mainArticle": mainArticle->{
   _id,
    "title": titleInt[_key == $lang][0].value,
    date,
    "content": contentInt[_key == $lang][0].value,
  image,
  imageCover,
link,
},
"mainArticleLink": mainArticleLink[_key == $lang][0].value,
"articles": *[_type == "article" && _id != ^.mainArticle._ref] {
  _id,
  "title": titleInt[_key == $lang][0].value,
  date,
  "content": contentInt[_key == $lang][0].value,
  image,
  imageCover,
  link,
  },
}`; 

export const ARTICLE_PAGE_SEO_QUERY = groq`*[_type == "article"][0] {
,
}`;
export const ARTICLE_PAGE_QUERY = groq`*[_type == "article" && link.current == $slug][0] {
  "seo": seo{
    _id,
    "title": title[_key == $lang][0].value,
    "description": description[_key == $lang][0].value,
    "image": image
  },
    "title": titleInt[_key == $lang][0].value,
    date,
    "content": contentInt[_key == $lang][0].value,
    image,
    imageCover,
    link,
  "recommended": recommended[]->{
  _id,
  "title": titleInt[_key == $lang][0].value,
  date,
  "content": contentInt[_key == $lang][0].value,
  image,
  imageCover,
  link,
  },
  "recommendedText": *[_type == "blog"][0] {
    "title": recommendedArticlesTitle[_key == $lang][0].value,
    "subTitle": recommendedArticlesSubTitle[_key == $lang][0].value,
  }
}`; 
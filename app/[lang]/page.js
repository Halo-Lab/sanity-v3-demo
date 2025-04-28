import Home from '../../scenes/Home/Home';
import sanityFetch from '../../constants/sanityClient';
import { groq } from 'next-sanity';

async function fetchHomeData(lang) {
  const data = await sanityFetch({query: groq`*[_type == "home"] {
  "content": content[] {
    _type == "heroSection" => {
      ...,
    "heroButton": heroButtonInt[_key == $lang][0].value,
    "heroLink": heroLinkInt[_key == $lang][0].value,
    "heroText": heroTextInt[_key == $lang][0].value,
    "heroTitle": heroTitleInt[_key == $lang][0].value,
    },
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
    },
    _type == "statsSection" => {
      ...,
          "statsSubTitle": statsSubTitleInt[_key == $lang][0].value,
    "statsTitle": statsTitleInt[_key == $lang][0].value,
      "statsItems": statsItems[] {
    ...,
    "statsNumberDescription": statsNumberDescriptionInt[_key == $lang][0].value,
  },
    },
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
    },
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
},
    _type == "partnersSection" => {
      ...,
    "partnersSubTitle": partnersSubTitleInt[_key == $lang][0].value,
    "partnersTitle": partnersTitleInt[_key == $lang][0].value,
    },
}}`, params: {lang: lang}});
  return data[0];
}

export default async function IndexPage(props) {
  const { lang } = await props.params;

  const page = await fetchHomeData(lang);

  return (
    <div>
      <Home page={page} />
    </div>
  );
}

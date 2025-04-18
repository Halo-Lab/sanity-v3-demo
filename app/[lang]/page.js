import Home from '../../scenes/Home/Home';
import client from '../../constants/sanityClient';

async function fetchHomeData(lang) {
  const data = await client.fetch(`*[_type == "home"] {
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
    "heroButton": heroButtonInt[_key == $lang][0].value,
    "heroLink": heroLinkInt[_key == $lang][0].value,
    "heroText": heroTextInt[_key == $lang][0].value,
    "heroTitle": heroTitleInt[_key == $lang][0].value,
    "mobileAppButton": mobileAppButtonInt[_key == $lang][0].value,
    "mobileAppSubTitle": mobileAppSubTitleInt[_key == $lang][0].value,
    "mobileAppText": mobileAppTextInt[_key == $lang][0].value,
    "mobileAppTitle": mobileAppTitleInt[_key == $lang][0].value,
    "partnersSubTitle": partnersSubTitleInt[_key == $lang][0].value,
    "partnersTitle": partnersTitleInt[_key == $lang][0].value,
    "statsSubTitle": statsSubTitleInt[_key == $lang][0].value,
    "statsTitle": statsTitleInt[_key == $lang][0].value,
    "testimonialsSubTitle": testimonialsSubTitleInt[_key == $lang][0].value,
    "testimonialsTitle": testimonialsTitleInt[_key == $lang][0].value,
    "testimonialsItems": testimonialsItems[] {
    ...,
    "testimonialsCardProfession": testimonialsCardProfessionInt[_key == $lang][0].value,
    "testimonialsCardSign": testimonialsCardSignInt[_key == $lang][0].value,
    "testimonialsCardText": testimonialsCardTextInt[_key == $lang][0].value,
  },
  "statsItems": statsItems[] {
    ...,
    "statsNumberDescription": statsNumberDescriptionInt[_key == $lang][0].value,
  },
  "mobileAppItems": mobileAppItems[] {
    ...,
    "mobileAppFunctionText": mobileAppFunctionTextInt[_key == $lang][0].value,
  },
    }`,{lang: lang});
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

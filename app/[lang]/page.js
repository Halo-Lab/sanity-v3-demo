import Home from '../../scenes/Home/Home';
import sanityFetch from '../../constants/sanityClient';
import { HOME_PAGE_SECTIONS_QUERY } from '../../constants/queries';
import getImg from '../../utils/getImg';

async function fetchHomeData(lang) {
  const data = await sanityFetch({
    query: HOME_PAGE_SECTIONS_QUERY,
    params: { lang },
  });
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

export async function generateMetadata(props) {
  const { lang } =  await props.params;
  const data = await sanityFetch({
    query: HOME_PAGE_SECTIONS_QUERY,
    params: { lang },
  });
  const seo = data[0]?.seo || {};
  const heroImage = data[0]?.content?.find(item => item._type === 'heroSection')?.heroImage;
  return {
    title: seo.title || 'Home | Sanity Demo',
    description: seo.description || 'Sanity Demo',
    openGraph: seo.image ? {
      images: [{ url: getImg(seo.image) }],
    } : heroImage ? {
      images: [{ url: getImg(heroImage) }],
    } : undefined,
  };
}

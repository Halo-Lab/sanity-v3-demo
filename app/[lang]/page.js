import Home from '../../scenes/Home/Home';
import sanityFetch from '../../constants/sanityClient';
import { HOME_PAGE_SECTIONS_QUERY } from '../../constants/queries';

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

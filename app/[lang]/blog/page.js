import Blog from '../../../scenes/Blog/Blog';
import sanityFetch from '../../../constants/sanityClient';
import { groq } from 'next-sanity';

async function fetchBlogData(lang) {
  const data = await sanityFetch({query: groq`*[_type == "blog"] {
    ...,
    "blogHeroLinkName": blogHeroLinkNameInt[_key == $lang][0].value,
    "blogHeroText": blogHeroTextInt[_key == $lang][0].value,
    "blogHeroTitle": blogHeroTitleInt[_key == $lang][0].value,
    "latestPosts": latestPosts[]{
    ...,
    "latestPostsText": latestPostsTextInt[_key == $lang][0].value,
    "latestPostsTitle": latestPostsTitleInt[_key == $lang][0].value,
    },
    "recommendPostsSubTitle": recommendPostsSubTitleInt[_key == $lang][0].value,
    "recommendPostsTitle": recommendPostsTitleInt[_key == $lang][0].value,
  }`,params: {lang: lang}});
  return data[0];
}

export default async function BlogPage(props) {
  const { lang } = await props.params;

  const page = await fetchBlogData(lang);

  return (
    <div>
       <Blog page={page} lang={lang} />
    </div>
  );
}

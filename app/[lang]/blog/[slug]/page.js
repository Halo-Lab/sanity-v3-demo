import Post from '../../../../scenes/Post/Post';
import client from '../../../../constants/sanityClient';

async function fetchBlogData(lang) {
  const data = await client.fetch(`*[_type == "blog"] {
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
  }`,{lang: lang});
  return data[0];
}

export default async function PostPage(props) {
  const { lang, slug } = await props.params;

  const page = await fetchBlogData(lang);

  return (
    <div>      
    <Post data={page} slug={slug} lang={lang} />     
  </div>
  );
}

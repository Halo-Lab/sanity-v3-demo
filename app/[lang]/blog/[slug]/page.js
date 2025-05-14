import Post from '../../../../scenes/Post/Post';
import sanityFetch from '../../../../constants/sanityClient';
import { groq } from 'next-sanity';
import { ARTICLE_PAGE_QUERY } from '../../../../constants/queries';
import getImg from '../../../../utils/getImg';

async function fetchArticleData(lang, slug) {
  const data = await sanityFetch({query: ARTICLE_PAGE_QUERY, params: {lang: lang, slug: slug}});
  return data;
}

export default async function PostPage(props) {
  const { lang, slug } = await props.params;

  const page = await fetchArticleData(lang, slug);

  return (
    <div>      
    <Post data={page} slug={slug} lang={lang} />     
  </div>
  );
}

export async function generateMetadata(props) {
  const { lang, slug } = await props.params;
  const data = await sanityFetch({
    query: ARTICLE_PAGE_QUERY,
    params: { lang, slug },
  });
  const seo = data?.seo || {};
  return {
    title: seo.title || data.title || 'Blog Post | Sanity Demo',
    description: seo.description || data.content || '',
    openGraph: seo.image ? {
      images: [{ url: getImg(seo.image) }],
    } : data?.image ? {
      images: [{ url: getImg(data.image) }],
    } : undefined,
  };
}

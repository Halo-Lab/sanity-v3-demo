import Blog from '../../../scenes/Blog/Blog';
import sanityFetch from '../../../constants/sanityClient';
import { BLOG_PAGE_QUERY, BLOG_PAGE_SEO_QUERY } from '../../../constants/queries';
import { groq } from 'next-sanity';

async function fetchBlogData(lang) {
  const data = await sanityFetch({query: BLOG_PAGE_QUERY, params: {lang: lang}});
  return data;
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

export async function generateMetadata(props) {
  const { lang } = await props.params;
  const data = await sanityFetch({
    query: BLOG_PAGE_SEO_QUERY,
    params: { lang },
  });
  const seo = data?.seo || {};
  return {
    title: seo.title || 'Blog | Sanity Demo',
    description: seo.description || '',
    openGraph: seo.image ? {
      images: [{ url: getImg(seo.image) }],
    } : undefined,
  };
}

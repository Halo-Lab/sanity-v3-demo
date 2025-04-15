import client from '../../constants/sanityClient';
import Blog from "../../scenes/Blog/Blog";


async function fetchBlogData() {
    const data = await client.fetch(`*[_type == "blog"]`);
    return data[0];
  }

  export default async function BlogPage() {
    const page = await fetchBlogData();
  return (
    <div>
      <Blog page={page} />
    </div>
  );
}
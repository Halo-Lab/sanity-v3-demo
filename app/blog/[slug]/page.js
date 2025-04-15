import client from '../../../constants/sanityClient';
import Post from "../../../scenes/Post/Post";

async function fetchBlogData() {
    const data = await client.fetch(`*[_type == "blog"]`);
    return data[0];
  }

export default async function PostPage({params}) {  
    const page = await fetchBlogData();
    const { slug } = await params
  return (
    <div>      
      <Post data={page} slug={slug} />     
    </div>
  );
}

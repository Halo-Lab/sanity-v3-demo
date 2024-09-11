import client from '../../constants/sanityClient';
import Blog from "../../scenes/Blog/Blog";

export const getStaticProps = async () => {
  const data = await client.fetch(`*[_type == "blog"]`);
  return {
    props: { page: data[0] },
  };
};

function BlogPage({ page }) {

  return (
    <div>
      {/* <Blog page={page} /> */}
    </div>
  );
}

export default BlogPage;

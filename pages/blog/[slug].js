import client from '../../constants/sanityClient';
import Post from "../../scenes/Post/Post";

export const getServerSideProps = async () => {
  const data = await client.fetch(`*[_type == "blog"]`);
  if (!data) {
    return { notFound: true };
  }
  return {
    props: { page: data[0] },
  };
};

function PostPage({ page }) {  

  return (
    <div>      
      {/* <Post data={page} />      */}
    </div>
  );
}

export default PostPage;

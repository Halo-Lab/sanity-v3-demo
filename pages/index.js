import Home from '../scenes/Home/Home';
import client from '../constants/sanityClient';

export const getStaticProps = async () => {
  const data = await client.fetch(`*[_type == "home"]`);
  return {
    props: { page: data[0] },
  };
};

function HomePage({ page }) {
  return (
    <div>
      <Home page={page} />
    </div>
  )
}

export default HomePage

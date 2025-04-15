import Home from '../scenes/Home/Home';
import client from '../constants/sanityClient';

async function fetchHomeData() {
  const data = await client.fetch(`*[_type == "home"]`);
  return data[0];
}

export default async function HomePage() {
  const page = await fetchHomeData();

  return (
    <div>
      <Home page={page} />
    </div>
  );
}
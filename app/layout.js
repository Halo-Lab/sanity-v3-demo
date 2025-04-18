import client from '../constants/sanityClient';
import '../styles/index.scss';
import Layout from '../components/Layout/Layout';

export const metadata = {
  title: 'sanity-v3-demo',
  description: 'Demo create app with Next.js and Sanity CMS',
  icons: {
    icon: '/favicon.svg',
  },
};

async function fetchLayoutData() {
  try {
    const page = await client.fetch(`*[_type == "layout"]`);
    return page[0];
  } catch (error) {
    return null;
  }
}

export default async function RootLayout({ children }) {
  const data = await fetchLayoutData();

  return (
    <html lang="en">
      <body>
        <Layout data={data}>
          {children}
        </Layout>
      </body>
    </html>
  );
}
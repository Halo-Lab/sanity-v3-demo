import { i18n } from "../../i18n-config";
import client from '../../constants/sanityClient';
import '../../styles/index.scss';
import Layout from '../../components/Layout/Layout';

export const metadata = {
  title: 'sanity-v3-demo',
  description: 'Demo create app with Next.js and Sanity CMS',
  icons: {
    icon: '/favicon.svg',
  },
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

async function fetchLayoutData(lang) {
  try {
    const page = await client.fetch(`*[_type == "layout"]{
      ...,
      "buttonText": buttonTextInt[_key == $lang][0].value,
      "navItems": navItems[]{
      ...,
      "linkName": linkNameInt[_key == $lang][0].value,},
      "conversionPlaceholder": conversionPlaceholderInt[_key == $lang][0].value,
      "conversionSubTitle": conversionSubTitleInt[_key == $lang][0].value,
      "conversionTagline": conversionTaglineInt[_key == $lang][0].value,
      "conversionTrial": conversionTrialInt[_key == $lang][0].value,
      "footerText": footerTextInt[_key == $lang][0].value,
      }[0]`, {lang: lang});
    return page;
  } catch (error) {
    return null;
  }
}

export default async function Root(props) {
  const params = await props.params;

  const { children } = props;

  const data = await fetchLayoutData(params.lang);  

  return (
    <html lang={params.lang}>
      <body>
        <Layout data={data} lang={params.lang}>
          {children}
        </Layout>
      </body>
    </html>
  );
}

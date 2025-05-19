import { i18n } from "../../i18n-config";
import sanityFetch from '../../constants/sanityClient';
import '../../styles/index.scss';
import Layout from '../../components/Layout/Layout';
import { DisableDraftMode } from '../../sanity/loader/DisableDraftMode';
import { groq, VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";

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
    const page = await sanityFetch({query: groq`*[_type == "config"]{
      _id,
      "header": header{
      "logo": logo,
        "navigation": navigation {
          "navigation": navigation[]{
                      "linkName": linkNameInt[_key == "en"][0].value,
          "link": link->{_id, slug},
          }
        },
      "buttonText": buttonTextInt[_key == $lang][0].value,
      "buttonLink": buttonLink,
      },
      "footer": footer{
        "logo": logo,
        "footerText": footerTextInt[_key == $lang][0].value,
        "footerHaloText": footerHaloText,
        "footerHaloLogo": footerHaloLogo,
        "footerHaloLink": footerHaloLink,
      },
      "socials": socials,
    }[0]`, params: {lang: lang}});
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
        {(await draftMode()).isEnabled && (
        <>
          <DisableDraftMode />
          <VisualEditing />
        </>
      )}
      </body>
    </html>
  );
}

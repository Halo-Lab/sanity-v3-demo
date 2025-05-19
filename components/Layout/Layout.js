import Header from "../Header/Header";
import Footer from "../Footer/Footer";


function Layout({ data, lang, children }) {
  return (
    <div>
      <Header data={data.header} lang={lang} />

         <main>{children}</main>

      <Footer data={data.footer} socials={data.socials} lang={lang} />
    </div>
  );
}

export default Layout;

import Header from "../Header/Header";
import Footer from "../Footer/Footer";


function Layout({ data, lang, children }) {

  return (
    <div>
      <Header data={data} lang={lang} />

         <main>{children}</main>

      <Footer data={data} />
    </div>
  );
}

export default Layout;

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Conversion from '../Conversion/Conversion'


function Layout({ data, lang, children }) {

  return (
    <div>
      <Header data={data} lang={lang} />

         <main>{children}</main>
      <Conversion data={data} />
      <Footer data={data} />
    </div>
  );
}

export default Layout;

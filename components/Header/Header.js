import Link from "next/link";
import styles from "./Header.module.scss";
import ButtonPrimary from "../Buttons/ButtonPrimary/ButtonPrimary";
import Navigation from "./Navigation/Navigation";
import Sandwich from "./Sandwich/Sandwich";
import getImg from '../../utils/getImg';

const Header = ({ data }) => {
  const {logo, buttonLink, buttonText, navItems} = data;

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerWrap}>
          <Link href="/">
            <a>
              <img className="logo" src={getImg(logo)} />
            </a>
          </Link>
          <div className={styles.headerRight}>
            <Navigation headerLinkArr={navItems} />
            <ButtonPrimary
              buttonLink={buttonLink}
              mod="button--second-type"
              buttonText={buttonText}
            />
          </div>
          <Sandwich
            headerLinkArr={navItems}
            buttonLink={buttonLink}
            buttonText={buttonText}
          />
        </div>
      </div>
   </header>
  );
};

export default Header;

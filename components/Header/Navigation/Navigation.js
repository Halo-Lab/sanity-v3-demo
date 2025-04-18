import React from "react";
import Link from "next/link";
import styles from "./Navigation.module.scss";

const renderMenu = (items, lang) => {
  const menu = items.map((item, index) => {    
    return (
      <li key={index}>
        <Link href={`/${lang}${item.linkHref}`} className={styles.menuLink}>
          {item.linkName}
        </Link>
      </li>
    );
  });

  return menu;
};

const Navigation = ({ headerLinkArr, lang }) => {
  return <ul className={styles.menu}>{renderMenu(headerLinkArr, lang)}</ul>;
};

export default Navigation;

import React from "react";
import styles from "./BlogHero.module.scss";
import ButtonPrimary from "../../../../components/Buttons/ButtonPrimary/ButtonPrimary";
import ArrowIcon from "../../../../assets/ArrowIcon/ArrowIcon";
import cutDescription from '../../../../utils/cutDescription';
import getImg from '../../../../utils/getImg'

const BlogHero = ({ data, lang }) => {
  const { blogHeroTitle, blogHeroText, blogHeroLinkHref, blogHeroImage, blogHeroLinkName } = data;

  return (
    <div className="hero">
      <div className="container">
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>{blogHeroTitle}</h1>
            <p className={styles.heroSubtitle}>
              {cutDescription(blogHeroText, 189)}
            </p>
            <ButtonPrimary
              buttonLink={`/${lang}/blog/${blogHeroLinkHref}`}
              mod="button--regular"
              Icon={ArrowIcon}
              buttonText={blogHeroLinkName}
            />
          </div>
          <div className={styles.heroImage}>
            <img
              className="heroImg"
              src={getImg(blogHeroImage)}
              alt={''}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;

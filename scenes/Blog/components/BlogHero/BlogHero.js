import React from "react";
import styles from "./BlogHero.module.scss";
import ButtonPrimary from "../../../../components/Buttons/ButtonPrimary/ButtonPrimary";
import ArrowIcon from "../../../../assets/ArrowIcon/ArrowIcon";
import cutDescription from '../../../../utils/cutDescription';
import getImg from '../../../../utils/getImg'
export function sanitizeSlug(slug) {
  // Remove invisible Unicode characters
  return slug
    .replace(/[\u200B-\u200D\uFEFF]/g, '') // Zero-width spaces, joiners, BOM
    .replace(/[\u0000-\u001F\u007F-\u009F]/g, '') // Control characters
    .trim(); // Remove leading/trailing spaces
}

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
              buttonLink={`/${lang}/blog/${sanitizeSlug(blogHeroLinkHref)}`}
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

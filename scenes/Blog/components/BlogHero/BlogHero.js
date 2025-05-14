import React from "react";
import styles from "./BlogHero.module.scss";
import ButtonPrimary from "../../../../components/Buttons/ButtonPrimary/ButtonPrimary";
import ArrowIcon from "../../../../assets/ArrowIcon/ArrowIcon";
import cutDescription from '../../../../utils/cutDescription';
import getImg from '../../../../utils/getImg'
import Image from 'next/image';

export function sanitizeSlug(slug) {
  // Remove invisible Unicode characters
  return slug
    .replace(/[\u200B-\u200D\uFEFF]/g, '') // Zero-width spaces, joiners, BOM
    .replace(/[\u0000-\u001F\u007F-\u009F]/g, '') // Control characters
    .trim(); // Remove leading/trailing spaces
}

const BlogHero = ({ data, lang }) => {
  const { title, content, link, image, mainArticleLink } = data;

  return (
    <div className="hero">
      <div className="container">
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>{title}</h1>
            <p className={styles.heroSubtitle}>
              {cutDescription(content, 189)}
            </p>
            <ButtonPrimary
              buttonLink={`/${lang}/blog/${sanitizeSlug(link.current)}`}
              mod="button--regular"
              Icon={ArrowIcon}
              buttonText={mainArticleLink}
            />
          </div>
          <div className={styles.heroImage}>
            <Image
              className="heroImg"
              src={getImg(image)}
              alt={''}
              loading="eager"
              width={1000}
              height={1000}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;

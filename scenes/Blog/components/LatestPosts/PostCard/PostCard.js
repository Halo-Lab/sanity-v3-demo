import Link from "next/link";
import styles from "./PostCard.module.scss";
import cutDescription from '../../../../../utils/cutDescription';
import getImg from '../../../../../utils/getImg';
export function sanitizeSlug(slug) {
  // Remove invisible Unicode characters
  return slug
    .replace(/[\u200B-\u200D\uFEFF]/g, '') // Zero-width spaces, joiners, BOM
    .replace(/[\u0000-\u001F\u007F-\u009F]/g, '') // Control characters
    .trim(); // Remove leading/trailing spaces
}

const PostCard = ({ post, lang }) => {
  const { latestPostsImage, latestPostsTitle, latestPostsText, latestPostsLink } = post;
  console.log('latestPostsLink', latestPostsLink);
  

  return (
    <div>
      <Link href={`/${lang}/blog/${sanitizeSlug(latestPostsLink)}`} className={styles.postCard}>
        <div className={styles.postImageBox}>
          <img
            src={getImg(latestPostsImage)}
            className={styles.postImg}
            alt={''}
          />
        </div>
        <h3 className={styles.postTitle}>{latestPostsTitle}</h3>
        <p className={styles.postDescription}>
          {cutDescription(latestPostsText, 87)}
        </p>
      </Link>
    </div>
  );
};

export default PostCard;

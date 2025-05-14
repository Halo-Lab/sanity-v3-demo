import Link from "next/link";
import styles from "./PostCard.module.scss";
import cutDescription from '../../../../../utils/cutDescription';
import getImg from '../../../../../utils/getImg';
import Image from 'next/image';

export function sanitizeSlug(slug) {
  return slug
    .replace(/[\u200B-\u200D\uFEFF]/g, '')
    .replace(/[\u0000-\u001F\u007F-\u009F]/g, '')
    .trim();
}

const PostCard = ({ post, lang }) => {
  const { image, title, content, link } = post;  

  return (
    <div>
      <Link href={`/${lang}/blog/${sanitizeSlug(link.current)}`} className={styles.postCard}>
        <div className={styles.postImageBox}>
          <Image
            src={getImg(image)}
            className={styles.postImg}
            alt={''}
            width={400}
            height={300}
          />
        </div>
        <h3 className={styles.postTitle}>{title}</h3>
        <p className={styles.postDescription}>
          {cutDescription(content, 87)}
        </p>
      </Link>
    </div>
  );
};

export default PostCard;

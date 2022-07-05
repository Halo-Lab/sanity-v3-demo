import Link from "next/link";
import styles from "./PostCard.module.scss";
import cutDescription from '../../../../../utils/cutDescription';
import getImg from '../../../../../utils/getImg';

const PostCard = ({ post }) => {
  const { latestPostsImage, latestPostsTitle, latestPostsText, latestPostsLink } = post;

  return (
    <div>
      <Link href={`/blog/${latestPostsLink}`}>
        <a className={styles.postCard}>
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
        </a>
      </Link>
    </div>
  );
};

export default PostCard;

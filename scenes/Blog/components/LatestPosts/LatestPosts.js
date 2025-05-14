import styles from "./LatestPosts.module.scss";
import PostCard from "./PostCard/PostCard";

const renderPosts = (data, lang) => {
  const postsList = data.map((item, index) => {
    return <PostCard key={index} post={item} lang={lang} />;
  });

  return postsList;
};

const LatestPosts = ({ data, lang }) => {
  return (
    <div className={styles.posts}>
      <div className="container">
        <div className={styles.postsInner}>
          {renderPosts(data, lang)}
        </div>
      </div>
    </div>
  );
};

export default LatestPosts;

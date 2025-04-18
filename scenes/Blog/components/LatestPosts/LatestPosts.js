import styles from "./LatestPosts.module.scss";
import PostCard from "./PostCard/PostCard";

const renderPosts = (latestPosts, lang) => {
  const postsList = latestPosts.map((item, index) => {
    return <PostCard key={index} post={item} lang={lang} />;
  });

  return postsList;
};

const LatestPosts = ({ data, lang }) => {
  const {latestPosts} = data
  
  return (
    <div className={styles.posts}>
      <div className="container">
        <div className={styles.postsInner}>
          {renderPosts(latestPosts, lang)}
        </div>
      </div>
    </div>
  );
};

export default LatestPosts;

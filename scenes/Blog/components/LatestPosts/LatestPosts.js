import styles from "./LatestPosts.module.scss";
import PostCard from "./PostCard/PostCard";

const renderPosts = (latestPosts) => {
  const postsList = latestPosts.map((item, index) => {
    return <PostCard key={index} post={item} />;
  });

  return postsList;
};

const LatestPosts = ({ data }) => {
  const {latestPosts} = data
  
  return (
    <div className={styles.posts}>
      <div className="container">
        <div className={styles.postsInner}>
          {renderPosts(latestPosts)}
        </div>
      </div>
    </div>
  );
};

export default LatestPosts;

"use client";
import styles from "./Post.module.scss";
import BlogPost from './components/BlogPost/BlogPost'
import RecommendPosts from './components/RecommendPosts/RecommendPosts'

const Post = ({ data, slug }) => {
  return (
    <div className={styles.wrapper}>
      <BlogPost data={data} slug={slug} />
      <RecommendPosts data={data} />
    </div>
  );
};

export default Post;

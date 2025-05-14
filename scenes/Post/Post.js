"use client";
import styles from "./Post.module.scss";
import BlogPost from './components/BlogPost/BlogPost'
import RecommendPosts from './components/RecommendPosts/RecommendPosts'

const Post = ({ data, slug, lang }) => {
  return (
    <div className={styles.wrapper}>
      <BlogPost data={data} slug={slug} />
      <RecommendPosts data={data.recommended} recommendedText={data.recommendedText} lang={lang} />
    </div>
  );
};

export default Post;

import BlogHero from "./components/BlogHero/BlogHero";
import LatestPosts from "./components/LatestPosts/LatestPosts";
import styles from "./Blog.module.scss";

const Blog = ({ page, lang }) => {
  return (
    <div className={styles.wrapper}>
      <BlogHero data={{...page.mainArticle, mainArticleLink: page.mainArticleLink}} lang={lang} />
      <LatestPosts data={page.articles} lang={lang} />
    </div>
  );
};

export default Blog;

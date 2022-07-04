import styles from "./BlogPost.module.scss";
import getImg from '../../../../utils/getImg';

const BlogPost = ({ data, slug }) => {
    let postImage, postTitle, postDate, postText;
  
    if(slug === 'main-post') {
      const {blogHeroImageCover, blogHeroTitle, blogHeroDate, blogHeroText} = data;
      postImage = blogHeroImageCover;
      postTitle = blogHeroTitle;
      postDate = blogHeroDate;
      postText = blogHeroText;
    } else {
      const { latestPosts } = data;
      const currentPage = slug.split('-')[1] - 1
      const {latestPostsImageCover, latestPostsTitle, latestPostsDate, latestPostsText} = latestPosts[currentPage];
      postImage = latestPostsImageCover;
      postTitle = latestPostsTitle;
      postDate = latestPostsDate;
      postText = latestPostsText;
    }
  
    return (
      <div className={styles.wrapper}>
        <div
          className={styles.postPreview}
          style={{
            backgroundImage: `url(${getImg(postImage)})`,
          }}
        />
        <div className="container">
          <div className={styles.inner_container}>          
            <h1 className={styles.postTitle}>{postTitle}</h1>
            <p className={styles.postDescription}>{postDate}</p>
            <div className={styles.postDescription}>{postText}</div>          
          </div>
        </div>
      </div>
    );
  };
  
  export default BlogPost;
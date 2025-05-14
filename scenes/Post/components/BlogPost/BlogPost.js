import styles from "./BlogPost.module.scss";
import getImg from '../../../../utils/getImg';

const BlogPost = ({ data, slug }) => {
  const {imageCover, title, date, content} = data;  
  
    return (
      <div className={styles.wrapper}>
        <div
          className={styles.postPreview}
          style={{
            backgroundImage: `url(${getImg(imageCover)})`,
          }}
        />
        <div className="container">
          <div className={styles.inner_container}>          
            <h1 className={styles.postTitle}>{title}</h1>
            <p className={styles.postDescription}>{new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</p>
            <div className={styles.postDescription}>{content}</div>          
          </div>
        </div>
      </div>
    );
  };
  
  export default BlogPost;
import React, { useState, useEffect } from "react";
import styles from "./RecommendPosts.module.scss";
import PostCard from "../../../Blog/components/LatestPosts/PostCard/PostCard";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination} from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";

const renderPosts = (data, lang) => {
  const postData = data.latestPosts.slice(0, 3);
  const postsList = postData.map(item => {
    return <PostCard key={item.latestPostsLink} post={item} lang={lang} />;
  });
  return postsList;
};

const renderSwiperPosts = (data, lang) => {
  const postData = data.latestPosts.slice(0, 4);
  const postsList = postData.map(item => {
    return (
      <SwiperSlide key={item.latestPostsLink}>
        <PostCard post={item} lang={lang} />
      </SwiperSlide>
    );
  });
  return postsList;
};

const swiperPost = (data, lang) => {
  const sliderParams = {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 16,
  };
  
  return (
    <Swiper
      modules={[Pagination]}
      {...sliderParams}
      pagination={{ clickable: true }}
      className={styles.postsSlider}
    >
      {renderSwiperPosts(data, lang)}
    </Swiper>
  ); 
};

const RecommendPosts = ({data, lang}) => {  
  const {recommendPostsTitle, recommendPostsSubTitle} = data;

  const [isMobile, setMobile] = useState(false);
  const screenWidth = useMediaQuery({ query: "(max-width: 754px)" });

  useEffect(() => {
    setMobile(screenWidth);
  }, [screenWidth]);

  return (
    <div className={styles.posts}>
      <div className="container">
        <div className={styles.recommend_head}>
          <p className="section-category">{recommendPostsTitle}</p>
          <h2 className="section-title">{recommendPostsSubTitle}</h2>
          </div>
        <div className={styles.postsInner}>
          {isMobile ? swiperPost(data, lang) : renderPosts(data, lang)}
        </div>
      </div>
    </div>
  );
};

export default RecommendPosts;

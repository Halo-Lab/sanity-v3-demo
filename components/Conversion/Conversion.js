import styles from "./Conversion.module.scss";
import classNames from "classnames";
import ArrowIcon from "../../assets/ArrowIcon/ArrowIcon";
import ReplyIcon from "../../assets/ReplyIcon/ReplyIcon";
import ButtonSend from "../Buttons/ButtonSend/ButtonSend";
import getImg from '../../utils/getImg';

const Conversion = ({ data }) => {
  const { conversionSubTitle, conversionTrial, conversionPlaceholder, conversionImage, conversionTagline, conversionTaglineLogo } = data;

  return (
    <div className="section section--conversion">
      <div className="container">
        <div className="content-section content-section--blue">
          <div className="content-section__inner content-section__inner--padding-none">
            <div className={styles.conversion}>
              <div className={styles.conversionContent}>
                <div className={styles.conversionInfo}>
                  <h3 className="section-title section-title--inner">
                    {conversionSubTitle}
                  </h3>
                  <p className={styles.conversionDesc}>{conversionTrial}</p>
                </div>
                <form className={styles.conversionForm}>
                  <div
                    className={classNames("input", styles.conversionFormInput)}
                  >
                    <input
                      type="email"
                      className="input-item input-item--padding-right"
                      placeholder={conversionPlaceholder}
                    />
                    <ButtonSend Icon={ArrowIcon} mod="button--send" />
                  </div>
                </form>
              </div>
              <div className={styles.conversionImg}>
                <div className={styles.conversionReply}>
                  <div className={styles.conversionReplyIcon}>
                    <ReplyIcon />
                  </div>
                  <img
                    src={getImg(conversionTaglineLogo)}
                    className={styles.stickerImg}
                    alt={conversionTagline}
                  />
                  <span className={styles.conversionReplyText}>
                    {conversionTagline}
                  </span>
                </div>
                <img src={getImg(conversionImage)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversion;

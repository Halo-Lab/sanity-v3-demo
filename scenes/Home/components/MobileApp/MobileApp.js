import s from "./MobileApp.module.scss";
import ButtonPrimary from "../../../../components/Buttons/ButtonPrimary/ButtonPrimary";
import MobileAppFunction from "./MobileAppFunction/MobileAppFunction";
import classnames from "classnames";
import getImg from '../../../../utils/getImg';

const MobileApp = ({ data }) => {
  const { mobileAppTitle, mobileAppSubTitle, mobileAppText, mobileAppButton, mobileAppImage, mobileAppItems } = data;

  const mobileAppFunctions = mobileAppItems.map((item, index) => {
    return <MobileAppFunction data={item} key={index} />;
  });

  return (
    <div className="section">
      <div className="container">
        <div className={s.mobileApp}>
          <div className={s.mobileAppContent}>
            <div className={s.mobileAppLeft}>
              <div
                className={classnames(
                  `content-section content-section--green content-section--inner`
                )}
              >
                <div className="content-section__inner">
                  <div className={s.MobileAppFunctions}>
                    {mobileAppFunctions}
                  </div>
                  <img
                    className={s.mobileAppImg}
                    src={getImg(mobileAppImage)}
                    alt={''}
                  />
                </div>
              </div>
            </div>
            <div className={s.mobileAppInfo}>
              <span className="section-category section-category--inner">
                {mobileAppTitle}
              </span>
              <h3 className="section-title section-title--inner">{mobileAppSubTitle}</h3>
              <p className={s.mobileAppDesc}>{mobileAppText}</p>
              <div className={s.mobileAppFooter}>
                <ButtonPrimary buttonText={mobileAppButton} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;

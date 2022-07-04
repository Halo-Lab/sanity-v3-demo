import s from "./Stats.module.scss";
import StatsItem from "./StatsItem/StatsItem";

const Stats = ({ data }) => { 
  const { statsTitle, statsSubTitle } = data;

  const statsItems = data.statsItems.map((item, index) => {
    return <StatsItem data={item} key={index} />;
  });

  return (
    <div className="section">
      <div className={s.stats}>
        <div className="container">
          <span className="section-category">{statsTitle}</span>
          <h3 className="section-title">{statsSubTitle}</h3>
          <div className="section-content">
            <div className={s.statsList}>{statsItems}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;

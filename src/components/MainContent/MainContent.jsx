import React from 'react';
import frontPageImg from './../../img/first-page.png';
import cardsInfo from './cardsInfo';
import styles from './MainContent.module.css';

const MainPageCard = (props) => {
  const { image, title } = props;

  return (
    <div className={styles.card}>
      { image }
      {title}
    </div>
  );
};

const MainContent = () => {
  return (
    <div className={styles.MainContent}>
      <div className={styles.frontPageImage}>
        <img src={frontPageImg} className={styles.frontPage} />
      </div>
      <div className={styles.projectsContainer}>
        {cardsInfo.map((card) => {
          return <MainPageCard image={card.image} title={card.title} />;
        })}
      </div>
    </div>
  );
};
export default MainContent;

import React from 'react';
import frontPageImg from './../../img/first-page.png';
import { CARDS_INFO } from './constants';
import styles from './MainContent.module.css';

const MainPageCard = (props) => {
  const { image, title } = props;

  return (
    <div className={styles.card}>
<img src={image} className={styles.image} />      {title}
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
        {CARDS_INFO.map((card) => {
          return <MainPageCard image={card.image} title={card.title} />;
        })}
      </div>
    </div>
  );
};
export default MainContent;

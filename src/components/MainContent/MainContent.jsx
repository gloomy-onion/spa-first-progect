import React from "react";
import frontPageImg from "../../assets/img/first-page.png";
import { CARDS_INFO } from "./constants";
import styles from "./MainContent.module.css";

const MainPageCard = (props) => {
  const { image, title } = props;

  return (
    <div className={styles.card}>
      <img src={image} className={styles.image} alt={""} /> {title}
    </div>
  );
};

const MainContent = () => {
  return (
    <>
      <img src={frontPageImg} className={styles.frontPage} alt={""} />
      <div className={styles.projectsContainer}>
        {CARDS_INFO.map((card) => {
          return (
            <MainPageCard image={card.image} title={card.title} alt={""} />
          );
        })}
      </div>
    </>
  );
};
export default MainContent;

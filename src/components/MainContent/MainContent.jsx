import React from 'react';
import frontPageImg from './../../img/first-page.png';
import {CARDS_INFO} from './constants';
import styles from './MainContent.module.css';

const MainPageCard = (props) => {
    const {image, title} = props;

    return (
        <div className={styles.card}>
            <img src={image} className={styles.image}/> {title}
        </div>
    );
};

const MainContent = () => {
    return (
        <>

            <img src={frontPageImg} className={styles.frontPage}/>
            <div className={styles.projectsContainer}>
                {CARDS_INFO.map((card) => {
                    return <MainPageCard image={card.image} title={card.title}/>;
                })}
            </div>
        </>
    );
};
export default MainContent;

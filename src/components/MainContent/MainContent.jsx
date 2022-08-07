import React from 'react';
import frontPageImg from './../../img/first-page.png';
import firstCatImg from './../../img/hall.jpeg';
import secondCatImg from './../../img/bathroom.jpeg';
import thirdCatImg from './../../img/livingroom.jpeg';
import fourthCatImg from './../../img/toilet.jpeg';
import fifthCatImg from './../../img/bedroom.jpeg';
import styles from './MainContent.module.css';
import cn from 'classnames';

const MainContent = () => {
  return (
    <div className={ styles.MainContent }>
      <div className={ styles.frontPageImage }>
        <img src={ frontPageImg } className={ styles.frontPage } />
      </div>
      <div className={ styles.projectsContainer }>
        <div className={ cn( styles.firstCategory, styles.card ) }>
          <img src={ firstCatImg } alt='hall' className={ styles.img } />
          <a href='#'>Residential</a>
        </div>
        <div className={ cn( styles.secondCategory, styles.card ) }>
          <img src={ secondCatImg } alt='bathroom' className={ styles.img } />
          <a href='#'>Public Spaces</a>
        </div>
        <div className={ cn( styles.thirdCategory, styles.card ) }>
          <img src={ thirdCatImg } alt='livingroom' className={ styles.img } />
          <a href='#'>Retail</a>
        </div>
        <div className={ cn( styles.fourthCategory, styles.card ) }>
          <img src={ fourthCatImg } alt='toilet' className={ styles.img } />
          <a href='#'>Bars & Restaurants</a>
        </div>
        <div className={ cn( styles.fifthCategory, styles.card ) }>
          <img src={ fifthCatImg } alt='bedroom' className={ styles.img } />
          <a href='#'>Team</a>
        </div>
      </div>
    </div>
  );
};
export default MainContent;

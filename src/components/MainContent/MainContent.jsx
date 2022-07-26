import React from 'react';
import frontPageImg from './../../pictures/first-page.png';
import firstCatImg from './../../pictures/hall.jpeg';
import secondCatImg from './../../pictures/bathroom.jpeg';
import thirdCatImg from './../../pictures/livingroom.jpeg';
import fourthCatImg from './../../pictures/toilet.jpeg';
import fifthCatImg from './../../pictures/bedroom.jpeg';
import s from './MainContent.module.css';
import cx from 'classnames';

const MainContent = () => {
  return (
    <div className={ s.MainContent }>
      <div className={ s.frontPageImage }>
        <img src={ frontPageImg } className={ s.frontPage } />
      </div>
      <div className={ s.projectsContainer }>
        <div className={ cx( s.firstCategory, s.card ) }>
          <img src={ firstCatImg } alt='hall' className={ s.img } />
          <a href='#'>Residential</a>
        </div>
        <div className={ cx( s.secondCategory, s.card ) }>
          <img src={ secondCatImg } alt='bathroom' className={ s.img } />
          <a href='#'>Public Spaces</a>
        </div>
        <div className={ cx( s.thirdCategory, s.card ) }>
          <img src={ thirdCatImg } alt='livingroom' className={ s.img } />
          <a href='#'>Retail</a>
        </div>
        <div className={ cx( s.fourthCategory, s.card ) }>
          <img src={ fourthCatImg } alt='toilet' className={ s.img } />
          <a href='#'>Bars & Restaurants</a>
        </div>
        <div className={ cx( s.fifthCategory, s.card ) }>
          <img src={ fifthCatImg } alt='bedroom' className={ s.img } />
          <a href='#'>Team</a>
        </div>
      </div>
    </div>
  );
};
export default MainContent;

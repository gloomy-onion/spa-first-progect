import firstCatImg from './../../img/hall.jpeg';
import secondCatImg from './../../img/bathroom.jpeg';
import thirdCatImg from './../../img/livingroom.jpeg';
import fourthCatImg from './../../img/toilet.jpeg';
import fifthCatImg from './../../img/bedroom.jpeg';
import styles from './MainContent.module.css';

const cardsInfo = [
  {
    image: <img src={firstCatImg} className={styles.image} />,
    title: 'Residential',
  },
  {
    image: <img src={secondCatImg} className={styles.image} />,
    title: 'Public Spaces',
  },
  {
    image: <img src={thirdCatImg} className={styles.image} />,
    title: 'Retail',
  },
  {
    image: <img src={fourthCatImg} className={styles.image} />,
    title: 'Bars & Restaurants',
  },
  { image: <img src={fifthCatImg} className={styles.image} />, title: 'Team' },
];
export default cardsInfo;
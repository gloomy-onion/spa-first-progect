import React from 'react';
import list from './../../img/list.png';
import styles from './NavBar.module.css';
import cn from 'classnames';
import linksPath from './linksPath';
import {NavigationLink} from '../common/common';

const NavBar = () => {
    return (
        <nav>
            <div className={cn(styles.show, styles.dropdown)}>
                <img className={styles.list} src={list}/>
                <div className={styles.dropdownContent}>
                    <div className={styles.dropdown}>
                        {linksPath.map((path) => {
                            return <NavigationLink
                                to={path.to} text={path.text}/>;
                        })}
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default NavBar;

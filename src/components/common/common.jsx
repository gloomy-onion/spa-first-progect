import {NavLink} from 'react-router-dom';
import React from 'react';
import styles from '../NavBar/NavBar.module.css';

export const NavigationLink = (props) => {
    const {to, text} = props;
    return (
        <NavLink
            to={to}
            className={(navData) => (navData.isActive ? styles.active : '')}
        >
            {text}
        </NavLink>
    );}
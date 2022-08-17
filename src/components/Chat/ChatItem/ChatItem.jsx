import React from 'react';
import styles from './../Chat.module.css';
import {NavLink} from 'react-router-dom';

const ChatItem = (props) => {
    const {userName, id} = props;
    return (
        <div className={styles.dialogue}>
            <NavLink
                to={`/chat/${id}`}
                className={(navData) => (navData.isActive ? styles.active : '')}
            >
                {userName}
            </NavLink>
        </div>
    );
};

export default ChatItem;

import React from 'react';
import style from './style.css';

interface IListProps {
}

const List: React.FC<IListProps> = () => {


    return (
        <ul className={style.root}>
            <li className={style.listItem}>
                aaa
            </li>
        </ul>
    )
};

export default List;

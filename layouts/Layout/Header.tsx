import React from 'react';
import styles from '../../styles/Header.module.css';

export const Header: React.FC = () => (
  <div className={styles.header}>
    <h1 className={styles.title}>Animu</h1>

    <ul className={styles.list__container}>
      {[1, 2, 3, 4].map((item) => (
        <li key={item} className={styles.list__item}>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

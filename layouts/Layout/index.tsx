import React, { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import styles from '../../styles/Layout.module.css';

const Layout = ({ children }: { children: ReactNode }) => (
  <div className={styles.layout}>
    <Header />
    <div className={styles.layout__children}>{children}</div>
    <Footer />
  </div>
);

export default Layout;

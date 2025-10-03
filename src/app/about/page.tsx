import Counter from '@/components/counter/Counter';
import React from 'react'
import styles from "./page.module.css";

const AboutPage = () => {
  return <div className={styles.container}>
    <Counter />
  </div>;
};

export default AboutPage; 
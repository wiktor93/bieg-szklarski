import React from 'react';

import Button from '../atoms/Button';
import styles from './NewsPage.module.scss';
import ArticleList from './ArticleList';

const NewsPage = () => {
  return (
    <>
      <header className={styles.header}>
        <h2>AKTUALNOŚCI</h2>
      </header>

      <section className={styles.content}>
        <ArticleList />

        <Button>Zobacz więcej</Button>
      </section>
      <hr />
    </>
  );
};

export default NewsPage;

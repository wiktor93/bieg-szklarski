import React from 'react';
import {Link} from 'react-router-dom';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './ArticleList.module.scss';

const ArticleList = ({articles}) => {
  return articles.map((el) => (
    <Link key={el.id} to={`aktualności/${el.slug}`}>
      <article key={el.id} className={styles.article}>
        <div className={styles.img_container}>
          <img src={el.image.url} alt={el.image.title} />
        </div>
        <div className={styles.details_container}>
          <h4>{el.createdAt.slice(0, 10)}</h4>
          <h3>{el.title}</h3>
          <p>{el.text}</p>
        </div>
      </article>
    </Link>
  ));
};

export default ArticleList;

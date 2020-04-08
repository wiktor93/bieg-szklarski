import React from 'react';
import {useQuery} from 'graphql-hooks';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

import styles from './ArticleList.module.scss';

const ArticleList = () => {
  const {loading, error, data} = useQuery(articleQuery);

  if (loading)
    return (
      <Loader
        type="Oval"
        color="#005CA9"
        height={100}
        width={100}
        timeout={5000} // [sec]
      />
    );
  if (error) return 'Przepraszamy, wystąpił błąd. Prosimy spróbować później.';

  return data.allArticles.map((el) => (
    <article key={el.id} className={styles.article}>
      <div className={styles.img_container}>
        <img src={el.image.url} alt={el.image.title} />
      </div>
      <div className={styles.details_container}>
        <h3>{el.title}</h3>
        <h4>{el.date}</h4>
        <p>{el.text}</p>
      </div>
    </article>
  ));
};

const articleQuery = `query article {
  allArticles {
    title
    date
    text
    id
    image {
      url
      title
    }
  }
}`;

export default ArticleList;

import React from 'react';
import {Link} from 'react-router-dom';
import {useQuery} from 'graphql-hooks';

import styles from './LatestNews.module.scss';
import Button from '../../atoms/Button';
import {articlesQuery} from '../../../utils/queries';
import LoadingSpinner from '../../atoms/LoadingSpinner';
import FetchingErrorMessage from '../../atoms/FetchingErrorMessage';

const LatestNews = () => {
  const {loading, error, data} = useQuery(articlesQuery, {
    variables: {
      limit: 3,
      skip: 0,
    },
  });

  return (
    <div className={styles.wrap}>
      <h2>Aktualności</h2>

      <div className={styles.news}>
        <LoadingSpinner condition={loading} />
        <FetchingErrorMessage condition={error} />

        {data &&
          data.allArticles.map(({title, slug, date, createdAt, id, image}) => (
            <Link to={`aktualności/${slug}`} key={id}>
              <article>
                <div className={styles.photo}>
                  <img src={image.url} alt={image.title} />
                </div>

                <div className={styles.details}>
                  <p>{createdAt.slice(0, 10)}</p>
                  <h3>{title}</h3>
                </div>
              </article>
            </Link>
          ))}
      </div>
      <Button to="/aktualności">Zobacz więcej</Button>
    </div>
  );
};

export default LatestNews;

import React from 'react';
import {useQuery} from 'graphql-hooks';
import styles from './Article.module.scss';
import {singleArtQuery} from '../../utils/queries';
import LoadingSpinner from '../atoms/LoadingSpinner';
import FetchingErrorMessage from '../atoms/FetchingErrorMessage';

const Article = (props) => {
  const slug = props.match.params.slug;
  const {loading, error, data} = useQuery(singleArtQuery, {
    variables: {
      slug,
    },
  });

  return (
    <>
      <header className={styles.header}>
        <h2>AKTUALNOŚCI</h2>
      </header>

      <section className={styles.section}>
        <LoadingSpinner condition={loading} />
        <FetchingErrorMessage condition={error} />
        {data && data.article && (
          <article>
            <h3>{data.article.title}</h3>
            <h4>{data.article.createdAt.slice(0, 10)}</h4>
            <figure>
              <img
                src={data.article.image.url}
                alt={data.article.image.title}
              />
            </figure>
            <p>{data.article.text}</p>
            <hr />
          </article>
        )}
        {data && data.article === null && (
          <h3>Przepraszamy, wystąpił błąd. Podana strona nie istnieje.</h3>
        )}
      </section>
    </>
  );
};

export default Article;

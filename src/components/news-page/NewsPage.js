import React, {useState, useEffect} from 'react';
import {useQuery} from 'graphql-hooks';
import Button from '../atoms/Button';
import styles from './NewsPage.module.scss';
import ArticleList from './ArticleList';
import LoadingSpinner from '../atoms/LoadingSpinner';
import FetchingErrorMessage from '../atoms/FetchingErrorMessage';

import {articlesQuery} from '../../utils/queries';

const NewsPage = () => {
  const [articles, setArticles] = useState([]);
  const [skip, setSkip] = useState(0);
  const [isBtnDisabled, setBtnDisabled] = useState(false);
  const limit = 10;
  const variables = {limit, skip};
  const {loading, error, data} = useQuery(articlesQuery, {variables});

  useEffect(() => {
    //when data is already fetched
    if (data !== undefined) {
      setArticles([...articles, ...data.allArticles]);

      //when client fetched last article
      if (data.allArticles.map((el) => el.id).includes(data.article.id)) {
        setBtnDisabled(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <>
      <header className={styles.header}>
        <h2>AKTUALNOŚCI</h2>
      </header>

      <section className={styles.section}>
        <ArticleList articles={articles} />

        <LoadingSpinner condition={loading} />
        <FetchingErrorMessage condition={error} />

        <Button onClick={() => setSkip(skip + limit)} disabled={isBtnDisabled}>
          Zobacz więcej
        </Button>
      </section>
      <hr />
    </>
  );
};

export default NewsPage;

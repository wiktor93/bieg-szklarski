import React from 'react';
import {useQuery} from 'graphql-hooks';

import styles from './RegulationsPage.module.scss';
import {regulationsQuery} from '../../utils/queries';
import LoadingSpinner from '../atoms/LoadingSpinner';
import FetchingErrorMessage from '../atoms/FetchingErrorMessage';

const RegulationsPage = () => {
  const {loading, error, data} = useQuery(regulationsQuery);
  return (
    <>
      <header className={styles.header}>
        <h2>Regulamin</h2>
      </header>

      <section className={styles.content}>
        <h2>REGULAMIN ZAWODÓW – 3. BIEG SZKLARSKI</h2>

        <LoadingSpinner condition={loading} />
        <FetchingErrorMessage condition={error} />
        <div className={styles.terms}>
          {data &&
            data.allRegulations
              .sort((a, b) => a.order - b.order)
              .map((el) => (
                <article key={el.id}>
                  <h3>{`${el.order}. ${el.name}`}</h3>
                  <div dangerouslySetInnerHTML={{__html: el.listOfRules}}></div>
                </article>
              ))}
        </div>
      </section>

      <hr />
    </>
  );
};

export default RegulationsPage;

import React from 'react';
import news from '../../../assets/news';
import styles from './LatestNews.module.scss';
import Button from '../../atoms/Button';

const News = () => {
  return (
    <section className={styles.wrap}>
      <h2>Aktualności</h2>

      <div className={styles.news}>
        {news.map(({img, alt, note}, i) => (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a href="#" key={i}>
            <article>
              <div className={styles.photo}>
                <img src={img} alt={alt} />
              </div>
              <p>{note}</p>
            </article>
          </a>
        ))}
      </div>
      <Button to="/aktualności">Zobacz więcej</Button>
    </section>
  );
};

export default News;

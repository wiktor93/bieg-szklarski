import React from 'react';
import news from '../../../assets/news';
import styles from './News.module.scss';

const News = () => {
  return (
    <section className={styles.wrap}>
      <h2>Aktualności</h2>

      <div className={styles.news}>
        {news.map(({img, alt, note}, i) => (
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
    </section>
  );
};

export default News;

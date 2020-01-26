import React from 'react';
import news from '../../assets/news';
import styles from './News.module.scss';

const News = () => {
  return (
    <section className={styles.wrap}>
      <h2>Aktualności</h2>

      <div class={styles.news}>
        {news.map(({img, alt, note}, i) => (
          <a href="#">
            <article>
              <div class={styles.photo}>
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

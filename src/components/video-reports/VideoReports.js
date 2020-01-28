import React from 'react';

import styles from './VideoReports.module.scss';

const VideoReports = () => {
  return (
    <section className={styles.wraper}>
      <h2>Relacje</h2>
      <div className={styles.videos}>
        <iframe
          title="iTV WISŁA - Relacja z 2. Biegu Szklarskiego"
          src="https://www.youtube.com/embed/kiOzzfgTeek"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          title="Sandomierz TV - Relacja z 2. Biegu Szklarskiego"
          src="https://www.youtube.com/embed/Gs6SeCIMDNY"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default VideoReports;

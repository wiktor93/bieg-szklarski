import React from 'react'
import css from './RouteMapPage.module.scss'
import Map from '../interactive-map/Map'

const RouteMapPage = () => {
  return (
    <>
      <header className={css.header}>
        <h2>Trasa</h2>
      </header>

      <section className={css.content}>
        <div className={css.records}>
          <div className={css.record}>
            <h2>3. Bieg Szklarski — 20.09.2020</h2>
            <Map />

            <iframe
              width='560'
              height='315'
              src='https://www.youtube.com/embed/C3jOXwu-s-Y'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
            <iframe
              width='560'
              height='315'
              src='https://www.youtube.com/embed/_Nt0uEl5r9w'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>

          <div>
            <h2>2. Bieg Szklarski — 15.09.2019</h2>
            <iframe
              title='2. Bieg Szklarski - Prezentacja trasy'
              width='560'
              height='315'
              src='https://www.youtube.com/embed/nHZtfVniumw'
              frameBorder='0'
              allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
      <hr></hr>
    </>
  )
}

export default RouteMapPage

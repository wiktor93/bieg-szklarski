import React, {useEffect, useRef} from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-gpx';
import 'leaflet-fullscreen';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';

import gpxTrack1 from '../../assets/gpx/polmaraton.gpx';
import gpxTrack2 from '../../assets/gpx/5km.gpx';

import startPoint from '../../icons/green-location-pin.svg';
import finishPoint from '../../icons/red-location-pin.svg';

import styles from './Map.module.scss';

const Map = () => {
  const mapRef = useRef(null);

  //add map
  useEffect(() => {
    mapRef.current = L.map('mapid', {
      layers: [
        L.tileLayer(
          'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> | © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken:
              'pk.eyJ1Ijoid2lrdDByIiwiYSI6ImNrNzBrOHN1aTBhd3EzZG80enBlaDdxcjYifQ.QO7vTDtTkw8cPAdoZYqTDQ'
          }
        )
      ],
      zoomControl: false
    });

    //add full-screen button
    mapRef.current.addControl(
      new L.Control.Fullscreen({
        position: 'bottomright'
      })
    );
    //change zoom controlls position
    L.control.zoom({position: 'bottomright'}).addTo(mapRef.current);
  }, []);

  //add GPX tracks
  useEffect(() => {
    //half-marathon
    const track1 = new L.GPX(gpxTrack1, {
      async: true,
      polyline_options: {
        color: '#005DA8',
        lineCap: 'round'
      },
      marker_options: {
        startIconUrl: startPoint,
        endIconUrl: finishPoint
      }
    })
      .on('loaded', function(e) {
        mapRef.current.fitBounds(e.target.getBounds());
      })
      .on('add', function(e) {
        mapRef.current.fitBounds(e.target.getBounds());
      })
      .addTo(mapRef.current);

    //5km
    const track2 = new L.GPX(gpxTrack2, {
      async: true,
      polyline_options: {
        color: '#005DA8',
        lineCap: 'round'
      },
      marker_options: {
        startIconUrl: startPoint,
        endIconUrl: finishPoint
      }
    }).on('add', function(e) {
      mapRef.current.fitBounds(e.target.getBounds());
    });

    const overlayMaps = {
      Półmaraton: track1,
      'Szklana Piątka / NW': track2
    };

    //tracks layer toogle
    L.control
      .layers(overlayMaps, null, {position: 'topleft', collapsed: false})
      .addTo(mapRef.current);
  }, []);

  return <div id="mapid" className={styles.mapid}></div>;
};

export default Map;

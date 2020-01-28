import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Navigation from './navigation/Navigation';
import Heading from './heading/Heading';
import News from './news/News';
import CharityBanner from './charity-banner/CharityBanner';
import VideoReports from './video-reports/VideoReports';
import GalleryBanner from './gallery/GalleryBanner';

import Sponsors from './sponsors/Sponsors';
import Footer from './footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Heading />
        <News />
        <CharityBanner />
        <VideoReports />
        <GalleryBanner />

        <Sponsors />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

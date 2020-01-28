import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Navigation from './navigation/Navigation';
import Heading from './heading/Heading';
import News from './news/News';
import CharityBanner from './charity-banner/CharityBanner';
import VideoReports from './video-reports/VideoReports';

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

        <Sponsors />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

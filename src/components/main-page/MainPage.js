import React from 'react';

import Heading from './heading/Heading';
import LatestNews from './latest-news/LatestNews';
import CharityBanner from './charity-banner/CharityBanner';
import VideoReports from './video-reports/VideoReports';
import GalleryBanner from './gallery-banner/GalleryBanner';

const MainPage = () => {
  return (
    <>
      <Heading />
      <LatestNews />
      <CharityBanner />
      <VideoReports />
      <GalleryBanner />
    </>
  );
};

export default MainPage;

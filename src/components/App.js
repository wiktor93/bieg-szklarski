import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import ScrollToTop from '../utils/hooks/ScrollToTop';
import Navigation from './navigation/Navigation';
import MainPage from './main-page/MainPage';
import ResultsPage from './results-page/ResultsPage';
import GalleryPage from './gallery-page/GalleryPage';
import RegistrationPage from './registration-page/RegistrationPage';
import RouteMapPage from './route-map-page/RouteMapPage';
import RegulationsPage from './regulations-page/RegulationsPage';
import ContactPage from './contact-page/ContactPage';
import Sponsors from './sponsors/Sponsors';
import Footer from './footer/Footer';
import PageNotFound from './page-not-found/PageNotFound';
import NewsPage from './news-page/NewsPage';
import Article from './news-page/Article';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop />

        <Navigation />

        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/wyniki" component={ResultsPage} />
          <Route exact path="/galeria" component={GalleryPage} />
          <Route exact path="/zapisy" component={RegistrationPage} />
          <Route exact path="/trasa" component={RouteMapPage} />
          <Route exact path="/regulamin" component={RegulationsPage} />
          <Route exact path="/kontakt" component={ContactPage} />
          <Route exact path="/aktualności" component={NewsPage} />
          <Route exact path="/aktualności/:slug" component={Article} />
          <Route component={PageNotFound} />
        </Switch>
        <Sponsors />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

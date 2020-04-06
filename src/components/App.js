import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Navigation from './navigation/Navigation';
import MainPageContent from './main-page-content/MainPageContent';
import Results from './results/Results';
import Gallery from './gallery/Gallery';
import Registration from './registration/Registration';
import RunningRoutes from './running-routes/RunningRoutes';
import TermsAndConditions from './terms-and-conditions/TermsAndConditions';
import ContactPage from './contact/ContactPage';
import Sponsors from './sponsors/Sponsors';
import Footer from './footer/Footer';
import PageNotFound from './page-not-found/PageNotFound';
import ScrollToTop from '../utils/hooks/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop />

        <Navigation />

        <Switch>
          <Route exact path="/" component={MainPageContent} />
          <Route path="/wyniki" component={Results} />
          <Route path="/galeria" component={Gallery} />
          <Route path="/zapisy" component={Registration} />
          <Route path="/trasa" component={RunningRoutes} />
          <Route path="/regulamin" component={TermsAndConditions} />
          <Route path="/kontakt" component={ContactPage} />
          <Route component={PageNotFound} />
        </Switch>
        <Sponsors />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

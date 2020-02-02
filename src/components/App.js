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

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />

        <Switch>
          <Route exact path="/" component={MainPageContent} />
          <Route path="/results" component={Results} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/registration" component={Registration} />
          <Route path="/routes" component={RunningRoutes} />
          <Route path="/terms-and-conditions" component={TermsAndConditions} />
          <Route path="/contact" component={ContactPage} />
          <Route component={PageNotFound} />
        </Switch>
        <Sponsors />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Navigation from './navigation/Navigation';
import MainPageContent from './main-page-content/MainPageContent';
import Results from './results/Results';

import Sponsors from './sponsors/Sponsors';
import Footer from './footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />

        <Switch>
          <Route exact path="/" component={MainPageContent} />
          <Route path="/results" component={Results} />
        </Switch>
        <Sponsors />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

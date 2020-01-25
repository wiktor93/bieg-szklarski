import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Navigation from './navigation/Navigation';
import Heading from './heading/Heading';

import Sponsors from './sponsors/Sponsors';
import Footer from './footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Heading />

        <Sponsors />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

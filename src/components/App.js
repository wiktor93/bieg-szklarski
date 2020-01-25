import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Navigation from './navigation/Navigation';
import Heading from './heading/Heading';

import Sponsors from './sponsors/Sponsors';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Heading />

        <Sponsors />
      </div>
    </BrowserRouter>
  );
}

export default App;

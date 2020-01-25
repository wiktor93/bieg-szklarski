import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Navigation from './navigation/Navigation';
import Heading from './heading/Heading';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Heading />
      </div>
    </BrowserRouter>
  );
}

export default App;

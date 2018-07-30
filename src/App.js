// @ flow
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import MainPage from './modules/MainPage';

class App extends React.Component {
  render() {
    return (
      // Deleted react-router. Found no use for it yet
      <MainPage />
    );
  }
}

export default App;

// @ flow
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import MainPage from './modules/MainPage';

class App extends React.Component {
  render() {
    return (
      <MainPage />
    );
  }
}

export default App;

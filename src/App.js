import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './component/ui/layout/navbar';

import DashBoard from './component/ui/dashboard/index';
 
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" component={DashBoard} />
          </Switch>
        </div>
    </BrowserRouter>
      );
  }
}

export default App;

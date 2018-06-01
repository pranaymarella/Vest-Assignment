import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './Dashboard.js';
import Reports from './Reports.js';
import More from './More.js';

class Main extends Component {
  render () {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={ Dashboard } />
          <Route path='/reports' component={ Reports } />
          <Route path='/more' component={ More } />
        </Switch>
      </main>
    );
  }
}

export default Main;

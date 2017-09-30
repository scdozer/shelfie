import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Shelf from './components/Shelf/Shelf';
import Bin from './components/Bin/Bin';


export default(
    <Switch>
      <Route component={ Home } path="/" exact/>
      <Route component={ Shelf } path="/shelf/:id" />
      <Route component={ Bin } path="/bin/:id" />
    </Switch>
)

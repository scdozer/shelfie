import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Shelf from './components/Shelf/Shelf';
import Bin from './components/Bin/Bin';
import Create from './components/Create/Create';


export default(
    <Switch>
      <Route component={ Home } path="/" exact/>
      <Route component={ Create } path="/shelf/:id/create/:positionNBR"  />
      <Route component={ Shelf } path="/shelf/:id" exact/>
      <Route component={ Bin } path="/shelf/:id/:id" exact />
    </Switch>
)

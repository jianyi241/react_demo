import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Index from '../page/index';
import About from '../page/about/about';
import Add from '../page/add/add';
import Login from '../page/login/login';

const BasicRoute = () => (
  <BrowserRouter basename="/reactdemo/">
    <Switch>
      <Route exact path="/" component={Index}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/add" component={Add}/>
      <Route exact path="/login" component={Login}/>
    </Switch>
  </BrowserRouter>
);


export default BasicRoute;

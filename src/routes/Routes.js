import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Landing from '../pages/Landing/Landing';
import Contact from '../pages/Contact/Contact';
import PageNotFound from '../pages/PageNotFound/PageNotFound';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>

      <Route exact path="/contact">
        <Contact />
      </Route>

      <Route>
        <PageNotFound />
      </Route>
    </Switch>
  )
};
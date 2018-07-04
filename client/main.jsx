import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from '../imports/ui/App';
import New from '../imports/ui/New';
import Lost from '../imports/ui/Lost';

Meteor.startup(() => {
  render(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/new" component={New} />
        <Route component={Lost} />
      </Switch>
    </BrowserRouter>,
    document.getElementById('render-target')
  );
});

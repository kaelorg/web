import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import AuthPage from './pages/auth';
import DashboardPage from './pages/dashboard';
import GeneralPage from './pages/general';
import HomePage from './pages/home';
import VanityPage from './pages/vanity';
import WelcomePage from './pages/welcome';

const Routes = () => (
  <Switch>
    <Route path="/" component={HomePage} exact />
    <Route path="/auth" component={AuthPage} />

    <Route path="/guilds/:guildId" component={DashboardPage} exact />
    <Route path="/guilds/:guildId/vanity" component={VanityPage} />
    <Route path="/guilds/:guildId/general" component={GeneralPage} />
    <Route path="/guilds/:guildId/welcome" component={WelcomePage} />

    <Route path="*">
      <Redirect to="/" />
    </Route>
  </Switch>
);

export default Routes;

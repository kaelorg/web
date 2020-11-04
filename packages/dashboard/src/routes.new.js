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
    <Route path="/" exact>
      <HomePage />
    </Route>

    <Route path="/auth">
      <AuthPage />
    </Route>

    <Route path="/guilds/:guildId" exact>
      <DashboardPage />
    </Route>
    <Route path="/guilds/:guildId/vanity">
      <VanityPage />
    </Route>
    <Route path="/guilds/:guildId/general">
      <GeneralPage />
    </Route>
    <Route path="/guilds/:guildId/welcome">
      <WelcomePage />
    </Route>

    <Route path="*">
      <Redirect to="/" />
    </Route>
  </Switch>
);

export default Routes;

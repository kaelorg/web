import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import AuthPage from './pages/auth';
import DashboardPage from './pages/dashboard';
import GeneralPage from './pages/general';
import GuildsPage from './pages/guilds';
import HomePage from './pages/home';
import ProfilePage from './pages/profile';
import VanityPage from './pages/vanity';
import WelcomePage from './pages/welcome';

const Routes = () => (
  <Switch>
    <Route path="/" component={HomePage} exact />
    <Route path="/login" component={AuthPage} />
    <Route path="/profile" component={ProfilePage} exact />

    <Route path="/guilds" component={GuildsPage} exact />
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

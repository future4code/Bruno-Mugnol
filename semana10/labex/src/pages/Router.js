import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import ApplicationPage from './UserApplicationPage';
import LoginPage from './LoginPage';
import AdminHomePage from './AdminHomePage'
import TripDetailPage from './TripDetailPage';
import TripFormPage from './TripFormPage';
import TripsPage from './TripsPage';

const Router = () => {
  return (
    <div>
      <p>Router</p>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/login">
            <LoginPage />
          </Route>

          <Route exact path="/trips">
            <TripsPage />
          </Route>

          <Route exact path="/trips/details/:tripID">
            <TripDetailPage />
          </Route>

          <Route exact path="/trips/create">
            <TripFormPage />
          </Route>

          <Route exact path="/application/:tripID">
            <ApplicationPage />
          </Route>

          <Route exact path="/home/admin">
            <AdminHomePage />
          </Route>

          <Route>
            <p>Página não encontrada</p>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Router
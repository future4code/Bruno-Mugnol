import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import AdminHomePage from '../pages/AdminHomePage'
import TripsPage from '../pages/TripsPage';
import TripDetailPage from '../pages/TripDetailPage';
import ApplicationPage from '../pages/UserApplicationPage';
import TripFormPage from '../pages/TripFormPage';

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
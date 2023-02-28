
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './components/Welcome';
import Nav from './components/shared/Nav';
//import {HashRouter, Route, Switch }from 'react-router-dom';
// import {BrowserRouter as Router, Route, Routes ,Switch} from "react-router-dom";
 import { BrowserRouter, Route, Switch } from 'react-router-dom';
//  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Dashboard from './components/dashboard/Dashboard';
import CreateWallet from './dashboardoperations/CreateWallet';
import NotFound from './components/shared/NotFound';
import { Provider } from 'react-redux';
import store from './Store';
import UpdateWallet from './dashboardoperations/UpdateWallet';
import Transaction from './components/transaction/Transaction';
import AddTransaction from './components/transaction/transactionoperation/AddTransaction';


function App() {
  return (
  <Provider store={store}>
  <BrowserRouter>
  <Route path='/' component={Nav} />

  <Switch>
  <Route exact path='/'  component={Welcome} />
  <Route exact path='/dashboard'  component={Dashboard} />
  <Route exact path='/createwallet'  component={CreateWallet} />
  <Route exact path='/updatewallet/:id'  component={UpdateWallet} />
  <Route path="/transactions/:id" exact component={Transaction} />
  <Route path="/trns/add/:id" exact component={AddTransaction} />
 

  <Route path="/" component={NotFound} />
  
  </Switch>
  </BrowserRouter>
   </Provider>
  );
}

export default App;

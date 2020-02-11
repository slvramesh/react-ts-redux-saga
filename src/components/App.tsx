import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Container from '@material-ui/core/Container';

import ManageContact from './contact/ManageContact';
import Navigation from './Navigation';

import './App.scss';

const Home: React.FC = () => {
  return (
    <h2>Home page</h2>
  );
}

const users: React.FC = () => {
  return (
    <h2>Users page</h2>
  );
}


const App: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Navigation />
      <Router>
        <div className="App">
          <Route default exact path="/" component={Home} />
          <Route path="/contact" component={ManageContact} />
          {/* <Route path="/contact/:id" component={ManageContact} /> */}
          <Route path="/users" component={users} />
        </div>
      </Router>
    </Container>
  );
}

export default App;

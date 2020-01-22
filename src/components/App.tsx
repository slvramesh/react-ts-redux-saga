import React from 'react';

import Container from '@material-ui/core/Container';

import ManageContact from './contact/ManageContact';

import './App.scss';

const App: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <div className="App">
        <ManageContact />
      </div>
    </Container>
  );
}

export default App;

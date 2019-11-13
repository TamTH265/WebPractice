import React from 'react';
import { Container } from 'reactstrap';

import Counters from './components/Counters';
import NavbarApp from './components/Navbar';
import CounterProvider from './contexts/CounterProvider';

const App = () => (
  <CounterProvider>
    <div className="App">
      <NavbarApp />
      <Container>
        <Counters />
      </Container>
    </div>
  </CounterProvider>
);

export default App;

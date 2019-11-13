import React, { Component } from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { sideDrawerOpen: false };
    this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this);
    this.backdropClickHandler = this.backdropClickHandler.bind(this);
  }

  drawerToggleClickHandler() {
    const { sideDrawerOpen } = this.state;
    this.setState({ sideDrawerOpen: !sideDrawerOpen });
  }

  backdropClickHandler() {
    const { sideDrawerOpen } = this.state;
    this.setState({ sideDrawerOpen: !sideDrawerOpen });
  }

  render() {
    const { sideDrawerOpen } = this.state;
    let backdrop;
    if (sideDrawerOpen) {
      backdrop = <Backdrop backdropClickHandler={this.backdropClickHandler} />;
    }
    return (
      <div className="App" style={{ height: '100%' }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={sideDrawerOpen} />
        {backdrop}
        <main style={{ paddingTop: '64px' }}>
          <p>This is the page content!</p>
        </main>
      </div>
    );
  }
}

export default App;

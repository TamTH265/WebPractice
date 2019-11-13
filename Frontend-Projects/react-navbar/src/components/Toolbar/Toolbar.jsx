import React from 'react';
import PropTypes from 'prop-types';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const Toolbar = (props) => {
  const { drawerClickHandler } = props;
  return (
    <header className="toolbar">
      <nav className="toolbar-navigation">
        <div className="toolbar-toggle-button">
          <DrawerToggleButton click={drawerClickHandler} />
        </div>
        <div className="toolbar-logo"><a href="/">THE LOGO</a></div>
        <div className="spacer" />
        <div className="toolbar-navigation-menu">
          <ul>
            <li><a href="/">Products</a></li>
            <li><a href="/">Users</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

Toolbar.propTypes = { drawerClickHandler: PropTypes.func.isRequired };

export default Toolbar;

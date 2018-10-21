import React from 'react';

export class Nav extends React.Component {

  render() {
    return (

      <header role="main">
        <nav className="navbar is-spaced">

          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <span>Earthsthetic<sub className="has-text-danger is-size-7">alpha</sub></span>
            </a>
            <div className="navbar-burger burger" data-target="navbarMenu">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link" href="#">
                  <span className="is-hidden-mobile">Menu</span>
                </a>
                <div className="navbar-dropdown is-boxed">
                  <a className="navbar-item" href="#">About</a>
                </div>
              </div>
            </div>
          </div>

        </nav>
      </header>
    )
  }
}

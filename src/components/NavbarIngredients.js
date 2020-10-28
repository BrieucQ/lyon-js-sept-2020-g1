import React from 'react';
import './NavbarIngredients.css';

class NavbarIngredients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav className="nav">
        <div className="menuToggleIngredients">
          <input type="checkbox" id="navChecked" />
          <span />
          <span />
          <ul className="menuIngredients">
            {/* <li></li>
            <li></li>
            <li></li>
            <li></li> */}
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavbarIngredients;

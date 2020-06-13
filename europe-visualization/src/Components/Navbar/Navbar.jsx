import React, { Component } from "react";
import classnames from "classnames";

import "./Navbar.scss";
import "../../constants";
import constants from "../../constants";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showButton: false,
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnClickButton = this.handleOnClickButton.bind(this);
  }

  handleOnClick = (value, e) => {
    this.props.fillMap(value, e);
    this.setState (prevState => ({
      ...prevState,
      showButton: !prevState.showButton,
    }));
  }

  handleOnClickButton = () => {
    this.props.drawMap();
    this.setState (prevState => ({
      ...prevState,
      showButton: !prevState.showButton,
    }));
  }

  render() {
    return (
      <div className="navbar">
        <div className="navbar__dropdown-surface">
          Surface
                <div className="navbar__dropdown-surface__content">
            <button>PIE CHART</button>
            <button>BAR CHART</button>
            <button onClick={(e) => this.handleOnClick(constants.surface, e)}>SHOW ON MAP</button>
          </div>
        </div>
        <div className="navbar__dropdown-population">
          Population
                <div className="navbar__dropdown-population__content">
            <button >PIE CHART</button>
            <button>BAR CHART</button>
            <button onClick={(e) => this.handleOnClick(constants.population, e)}>SHOW ON MAP</button>
          </div>
        </div>
        <div className="navbar__dropdown-gdp">
          GDP per capita
                <div className="navbar__dropdown-gdp__content">
            <button>BAR CHART</button>
            <button onClick={(e) => this.handleOnClick(constants.gdp, e)}>SHOW ON MAP</button>
          </div>
        </div>
        <div
          className={classnames({
            "navbar__button-clear": true,
            "shown": this.state.showButton,
          })}
          onClick={() => this.handleOnClickButton()}
        >
          CLEAR MAP
        </div>
      </div>
    );
  }
}

export default Navbar;
import React, { Component } from "react";

import "./Navbar.scss";
import "../../constants";
import constants from "../../constants";
class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="navbar__dropdown-surface">
                    Surface
                <div className="navbar__dropdown-surface__content">
                        <button>PIE CHART</button>
                        <button>BAR CHART</button>
                        <button onClick={(e) => this.props.fillMap(constants.surface, e)}>SHOW ON MAP</button>
                    </div>
                </div>
                <div className="navbar__dropdown-population">
                    Population
                <div className="navbar__dropdown-population__content">
                        <button >PIE CHART</button>
                        <button>BAR CHART</button>
                        <button onClick={(e) => this.props.fillMap(constants.population, e)}>SHOW ON MAP</button>
                    </div>
                </div>
                <div className="navbar__dropdown-gdp">
                    GDP per capita
                <div className="navbar__dropdown-gdp__content">
                        <button>BAR CHART</button>
                        <button onClick={(e) => this.props.fillMap(constants.gdp, e)}>SHOW ON MAP</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;
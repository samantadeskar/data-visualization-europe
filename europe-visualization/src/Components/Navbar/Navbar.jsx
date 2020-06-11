import React from "react";

import "./Navbar.scss";

export default function Navbar() {

    return (
        <div className="navbar">
            <div className="navbar__dropdown-surface">
                Surface
                <div className="navbar__dropdown-surface__content">
                    <button >PIE CHART</button>
                    <button>BAR CHART</button>
                    <button>SHOW ON MAP</button>
                </div>
            </div>
            <div className="navbar__dropdown-population">
                Population
                <div className="navbar__dropdown-population__content">
                    <button >PIE CHART</button>
                    <button>BAR CHART</button>
                    <button>SHOW ON MAP</button>
                </div>
            </div>
            <div className="navbar__dropdown-gdp">
                GDP
                <div className="navbar__dropdown-gdp__content">
                    <button>BAR CHART</button>
                    <button>SHOW ON MAP</button>
                </div>
            </div>
        </div>
    );
}
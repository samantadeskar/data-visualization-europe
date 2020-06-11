import React, { Component } from "react";
import * as d3 from "d3";
import * as topojson from "topojson";

import "./Map.scss";
import constants from "../../constants";
class Map extends Component {

    getPath = () => {
        const projection = d3.geoMercator()
            .center([0, 55])
            .scale(700)
            .translate([500, constants.height / 2])
        return d3.geoPath().projection(projection);
    }

    drawMap = () => {
        const path = this.getPath();
        d3.json("europe.json").then(europe => {
            d3.select("#europeMap").selectAll("path.country")
                .data(topojson.feature(europe, europe.objects.europe).features)
                .enter()
                .append("path")
                .attr("class", "country")
                .attr("d", path);
        });
    }

    render() {
        
        return (
            <svg width={constants.width} height={constants.height} id="europeMap">
                {this.drawMap()}
            </svg>
        );
        
    }
}

export default Map;
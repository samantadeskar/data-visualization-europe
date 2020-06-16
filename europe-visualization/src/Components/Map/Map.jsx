import React, { Component } from "react";
import * as d3 from "d3";
import * as topojson from "topojson";

import "./Map.scss";
import constants from "../../constants";
import Navbar from "../Navbar/Navbar";
import * as Colors from "../../_colors.scss";
import europeData from "../../Data/europeData";
class Map extends Component {

  getPath = () => {
    const projection = d3.geoMercator()
      .center([0, 54])
      .scale(650)
      .translate([constants.width / 2, constants.height / 2])
    return d3.geoPath().projection(projection);
  }

  drawMap = () => {
    this.removeMap();
    const path = this.getPath();

    d3.json("europe.json").then(europe => {
      d3.select("#europeMap")
        .call(this.zoom())
        .selectAll("path.country")
        .data(topojson.feature(europe, europe.objects.europe).features)
        .enter()
        .append("path")
        .attr("class", "country")
        .attr("id", function (d) {
          return d.id;
        })
        .attr("d", path);
    });
  }

  zoom = () => {
    return d3.zoom()
      .scaleExtent([1, 20])
      .on("zoom", function () {
        d3.select("#europeMap").selectAll("path")
          .attr("transform", d3.event.transform)
      });
  }

  removeMap = () => {
    d3.select("#europeMap").selectAll("*").remove();
  }

  fillMap = (value, e) => {
    e.preventDefault();
    e.stopPropagation();
    this.removeMap();

    const path = this.getPath();
    let opacity;
    let opacityValue;

    if (value === constants.population) {
      opacity = d3.scaleLinear().domain([0, 100000000]).range([0.1, 1]);
    } else if (value === constants.surface) {
      opacity = d3.scaleLinear().domain([0, 750000]).range([0.1, 1]);
    } else if (value === constants.gdp) {
      opacity = d3.scaleLinear().domain([0, 170000]).range([0.1, 1]);
    }

    d3.json("europe.json").then(europe => {
      d3.select("#europeMap").selectAll("path.country")
        .data(topojson.feature(europe, europe.objects.europe).features)
        .enter()
        .append("path")
        .attr("class", "country")
        .attr("id", function (d) {
          return d.id;
        })
        .attr("d", path)
        .style("fill-opacity", function (d) {
          for (let i = 0; i < europeData.length; i++) {
            if (europeData[i].id === d.id) {
              if (value === constants.population) opacityValue = europeData[i].population
              else if (value === constants.surface) opacityValue = europeData[i].surface
              else if (value === constants.gdp) opacityValue = europeData[i].gdp
              return opacity(opacityValue);
            }
          }
        })
        .style("fill", Colors.mapColor);
    });
  }

  render() {
    return (
      <div>
        <Navbar
          fillMap={this.fillMap}
          drawMap={this.drawMap}
          displayChart={this.displayEuropeChart}
        />
        <svg id="europeMap">
          {this.drawMap()}
        </svg>
      </div>
    );

  }
}

export default Map;
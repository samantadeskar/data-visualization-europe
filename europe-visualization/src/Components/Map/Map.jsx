import React, { Component } from "react";
import * as d3 from "d3";
import * as topojson from "topojson";
import * as _ from "lodash";

import "./Map.scss";
import constants from "../../constants";
import Navbar from "../Navbar/Navbar";
import * as Colors from "../../_colors.scss";
import europeData from "../../Data/europeData";
import * as colors from "../../_colors.scss";

//source: lab examples, project from my internship, https://blog.robertjesionek.com/d3js-geo/
class Map extends Component {

  getPath = () => {
    const projection = d3.geoMercator()
      .center([0, 56])
      .scale(650)
      .translate([constants.width / 2, constants.height / 2])
    return d3.geoPath().projection(projection);
  }

  getTooltipData = (value, country) => {
    let countryValue;
    switch (value) {
      case constants.population:
        countryValue = country.population;
        break;
      case constants.surface:
        countryValue = country.surface + ' km2';
        break;
      case constants.gdp:
        countryValue = '$' + country.gdp;
        break;
      default: break;
    }
    return countryValue;
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

  drawMap = () => {
    this.removeMap();
    const path = this.getPath();
    d3.json("europe.json").then(europe => {
      d3.select("#europeMap")
        .call(this.zoom())
        .selectAll(".country")
        .data(topojson.feature(europe, europe.objects.europe).features)
        .enter()
        .append("path")
        .attr("class", "country")
        .attr("d", path)
        .style("fill", colors.mapOpacity)
        .on("mouseover", function (d) {
          const country = _.find(europeData, ["id", d.id]);
          d3.select(this).style("fill", colors.dropdown);
          d3.select("#tooltip")
            .style("opacity", 1)
            .html('<div><p style="text-align:center; font-size:25px">' +
              country.name +
              '</p><p>Click for more information</p></div>');
        })
        .on("mouseout", function () {
          d3.select(this).style("fill", colors.mapOpacity);
          d3.select("#tooltip")
            .style("opacity", 0);
        });
    });
  }

  fillMap = (value) => {
    this.removeMap();

    const path = this.getPath();
    let opacity;
    let opacityValue;

    switch (value) {
      case constants.population:
        opacity = d3.scaleLinear().domain([0, 100000000]).range([0.1, 1]);
        break;
      case constants.surface:
        opacity = d3.scaleLinear().domain([0, 750000]).range([0.1, 1]);
        break;
      case constants.gdp:
        opacity = d3.scaleLinear().domain([0, 170000]).range([0.1, 1]);
        break;
      default: break;
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
        .style("fill", Colors.pink)
        .on("mouseover", (d) => {
          const country = _.find(europeData, ["id", d.id]);
          let countryValue = this.getTooltipData(value, country);
          d3.select("#tooltip")
            .style("opacity", 1)
            .html('<div><p style="text-align:center; font-size:25px">' +
              country.name +
              '</p><p>' +
              value +
              ': ' + countryValue +
              '</p > <p>Click for more information</p></div > ');
        })
        .on("mouseout", function () {
          d3.select("#tooltip")
            .style("opacity", 0);
        });;
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
        <text id="tooltip">
        </text>
      </div>
    );

  }
}

export default Map;
import React, { Component } from "react";
import * as d3 from "d3";

import constants from "../../../constants";
import europeData from "../../../Data/europeData";
import colors from "../../../_colors.scss";
class PieChart extends Component {
constructor() {
  super();
  this.showChart = this.showChart.bind(this);
}
  componentDidMount() {
    this.showChart();
  }
  getArc = () => {

  }

  getColors = () => {
    return d3.scaleOrdinal(
      [
        colors.chartColor1,
        colors.chartColor2,
        colors.chartColor3,
        colors.chartColor4,
        colors.chartColor5,
        colors.chartColor6,
        colors.chartColor7,
        colors.chartColor8,
        colors.chartColor9,
        colors.chartColor10
      ]
    );
  }

  getData = value => {
    return europeData.map(country => {
      switch (value) {
        case constants.surface: {
          country.value = country.surface;
          break;
        }
        case constants.population: {
          country.value = country.population;
          break;
        }
        default: break;
      }
      return [country.value];
    });
  }

  showChart = () => {
    const data = this.getData(this.props.dataToShow);
    const color = this.getColors();
    const pie = d3.pie().value(function (d,i) { return d.value });
    const arc = d3.arc()
      .innerRadius(constants.pieChartInnerRadius)
      .outerRadius(constants.pieChartOuterRadius);
    const pieArcs = d3.select("#pieChart").selectAll("g.pie")
      .data(pie(data))
      .enter()
      .append("g")
      .attr("className", "pie")
      .attr("transform", "translate(" + (constants.width / 2) + ", " +
        (constants.height / 2) + ")");
    pieArcs.append("path")
      .attr("fill", function (d, i) {
        return color(i)
      })
      .attr("d", arc);
      console.log(pie);
      console.log(pieArcs);
  }

  render() {
    return (
      <div>
        <svg id="pieChart">
          {this.showChart()}
        </svg>
        <div>Hover to see more info</div>
      </div>
    );
  }
}
export default PieChart;
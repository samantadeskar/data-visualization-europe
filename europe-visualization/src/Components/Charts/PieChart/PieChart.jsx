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
  getColors = () => {
    return (
      [
        colors.chartColor1, colors.chartColor2, colors.chartColor3, colors.chartColor4, colors.chartColor5,
        colors.chartColor6, colors.chartColor7, colors.chartColor8, colors.chartColor9, colors.chartColor10,
        colors.chartColor1, colors.chartColor2, colors.chartColor3, colors.chartColor4, colors.chartColor5,
        colors.chartColor6, colors.chartColor7, colors.chartColor8, colors.chartColor9, colors.chartColor10,
        colors.chartColor1, colors.chartColor2, colors.chartColor3, colors.chartColor4, colors.chartColor5,
        colors.chartColor6, colors.chartColor7, colors.chartColor8, colors.chartColor9, colors.chartColor10,
        colors.chartColor1, colors.chartColor2, colors.chartColor3, colors.chartColor4, colors.chartColor5,
        colors.chartColor6, colors.chartColor7, colors.chartColor8, colors.chartColor9, colors.chartColor10,
        colors.chartColor1, colors.chartColor2, colors.chartColor3, colors.chartColor4, colors.chartColor5,
        colors.chartColor6, colors.chartColor7, colors.chartColor8, colors.chartColor9, colors.chartColor10
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
      return [country.name, country.value];
    });
  }

  showChart = () => {
    const data = this.getData(this.props.dataToShow);
    const pie = d3.pie().value(function (d, i) { return d[1] });
    const arc = d3.arc()
      .innerRadius(constants.pieChartInnerRadius)
      .outerRadius(constants.pieChartOuterRadius);
    const pieArcs = d3.select("#pieChart").selectAll("g.pie")
      .data(pie(data))
      .enter()
      .append("g")
      .attr("class", "pie")
      .attr("transform", "translate(" + (constants.width / 2) + ", " +
        (constants.height / 2) + ")")
      .append("path")
    pieArcs
      .attr("fill", (d, i) => {
        const t = i/data.length;
        return d3.interpolatePlasma(t);
      })
      .attr("d", arc);

  }

  render() {
    return (
      <div>
        <svg id="pieChart">
          {/* {this.showChart()} */}
        </svg>
        <div>Hover to see more info</div>
      </div>
    );
  }
}
export default PieChart;
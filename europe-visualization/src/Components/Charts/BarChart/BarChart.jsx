import React, { Component } from "react";
import * as d3 from "d3";

import "./BarChart.scss"
import constants from "../../../constants";
import europeData from "../../../Data/europeData";
import colors from "../../../_colors.scss";

class BarChart extends Component {
  constructor() {
    super();
    this.showChart = this.showChart.bind(this);
    this.removeChart = this.removeChart.bind(this);
  }
  componentDidMount() {
    this.showChart();
  }

  componentDidUpdate() {
    this.removeChart()
    this.showChart();
  }

  removeChart = () => {
    d3.select(this.refs.barChart).selectAll("*").remove();
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
        case constants.gdp: {
          country.value = country.gdp;
          break;
        }
        default: break;
      }
      return [country.name, country.value];
    });
  }

  showChart = () => {
    const dataToShow = this.props.dataToShow;
    const ref = this.refs.countryInfo;
    const margin = constants.barChart.margin;
    const width = constants.barChart.width - 2 * margin;
    const height = constants.barChart.height - 2 * margin;
    const data = this.getData(this.props.dataToShow);
    const svg = d3.select(this.refs.barChart).append("svg");
    let domain, info;

    if (this.props.dataToShow === constants.surface) {
      domain = 800000;
      info = " km2";
    } else if (this.props.dataToShow === constants.population) {
      domain = 100000000;
      info = "";
    } else if (this.props.dataToShow === constants.gdp) {
      domain = 160000;
      info = "$";
    }

    const chart = svg.append("g").attr("transform", `translate(${margin}, ${margin})`);

    const yScale = d3.scaleLinear().range([height, 0]).domain([0, domain]);
    chart.append("g").call(d3.axisLeft(yScale));

    const xScale = d3.scaleBand().range([0, width]).domain(data.map(data => data[0]));
    chart.append("g").attr("transform", `translate(0, ${height})`).call(d3.axisBottom(xScale).tickFormat(""));

    chart.append('g')
      .attr('class', 'grid')
      .call(d3.axisLeft()
        .scale(yScale)
        .tickSize(-width, 0, 0)
        .tickFormat(''));

    chart.selectAll()
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d) => xScale(d[0]))
      .attr("y", (d) => yScale(d[1]))
      .attr("height", (d) => height - yScale(d[1]))
      .attr("width", xScale.bandwidth())
      .style("fill", colors.grayBlue)
      .on("mouseenter", function (d) {
        d3.select(this).style("fill", colors.activeColor).style("opacity", 0.7);
        if (dataToShow === constants.gdp) {
          d3.select(ref).style("display", "block")
            .html(d[0] + "<br>" + dataToShow + ": " + info + d[1]);
        } else {
          d3.select(ref).style("display", "block")
            .html(d[0] + "<br>" + dataToShow + ": " + d[1] + info);
        }
      })
      .on("mouseleave", function (d) {
        d3.select(this).style("fill", colors.grayBlue).style("opacity", 1);
        d3.select(ref).style("display", "none");
      });

    svg.append("text")
      .attr("class", "barChartLabel")
      .attr("x", 50)
      .attr("y", 50)
      .attr("text-anchor", "middle")
      .text(this.props.dataToShow);

    svg.append("text")
      .attr("class", "barChartLabel")
      .attr("x", width+50)
      .attr("y", height + 130)
      .attr("text-anchor", "middle")
      .text("Countries");
  }

  render() {
    return (
      <div>
        <div className="bar-chart" ref="barChart">
        </div>
        <div className="bar-chart__country-info" ref="countryInfo">
        </div>
        <div className="hover">Hover over bars to see more info</div>
      </div>
    );
  }
}
export default BarChart;
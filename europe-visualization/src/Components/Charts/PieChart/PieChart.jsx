import React, { Component } from "react";
import * as d3 from "d3";

//sources: http://bl.ocks.org/dbuezas/9306799,
//https://stackoverflow.com/questions/32298837/how-to-add-a-nice-legend-to-a-d3-pie-chart,
//lab examples
import constants from "../../../constants";
import * as myColors from "../../../_colors.scss";
class PieChart extends Component {
  constructor() {
    super();
    this.showChart = this.showChart.bind(this);
    this.removeChart = this.removeChart.bind(this);
  }
  componentDidMount() {
    this.removeChart();
    this.showChart();
  }

  componentDidUpdate() {
    this.removeChart();
    this.showChart();
  }

  //function that removes the chart
  removeChart = () => {
    d3.select(this.refs.pieChart).selectAll("*").remove();
  }

  //function that returns data based on a chosen category
  getData = () => {
    const dataToShow = this.props.dataToShow;
    const country = this.props.country;
    let data;
    switch (dataToShow) {
      case constants.religion: {
        data = country.religion;
        break;
      }
      case constants.urbanRural: {
        data = country.urbanRural;
        break;
      }
      default: break;
    }
    return data;
  }

  //function that creates the pie chart
  showChart = () => {
    const data = this.getData();
    const isUrbanRural = this.props.dataToShow === constants.urbanRural;
    const dataName = data.map(data => data.name);
    const colors = d3.schemePastel1;
    const width = constants.pieChart.width;
    const height = constants.pieChart.height;
    const radius = constants.pieChart.radius;
    //add svg to the pieChart div
    const svg = d3.select(this.refs.pieChart)
      .append("svg")
      .style("cursor", "default")
      .style("top", "18%")
      .style("margin", 0)
      .append("g");

    svg.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    //set color scheme based on data name
    const color = d3.scaleOrdinal().domain(dataName).range(colors);

    //set pie value
    const pie = d3.pie().value(d => {
      const percentage = d.percentage * 100;
      return percentage;
    })

    //set arc
    const arc = d3.arc().innerRadius(0).outerRadius(radius * 0.8);

    //create the pie chart
    svg.selectAll("g")
      .data(pie(data))
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", d => color(d.data.name))
      .attr("stroke", "white")
      .style("stroke-width", "2px");

    //if chosen category is urban vs rural, a percentage will be shown inside the pie chart
    if (isUrbanRural) {
      svg.selectAll("g")
        .data(pie(data))
        .enter()
        .append("text")
        .attr("transform", d => "translate(" + arc.centroid(d) + ")")
        .attr("text-anchor", "middle")
        .text(d => `${(d.data.percentage) * 100}%`)
        .style("opacity", 1)
        .attr("fill", myColors.grayBlue);
    }

    //add legend on the left side of the pie chart
    const legend = svg.selectAll("legend")
      .data(pie(data))
      .enter()
      .append("g")
      .attr("transform", (d, i) => "translate(" + -700 + "," + (i * 25 - 250) + ")")
      .attr("class", "legend");

    //add rectangle for each data type
    legend.append("rect")
      .attr("width", 20)
      .attr("height", 20)
      .attr("fill", d => color(d.data.name))
      .attr("stroke", myColors.grayBlue);

    //add text for each data type
    legend.append("text")
      .text(d => !isUrbanRural ? `${d.data.name}: ${((d.data.percentage) * 100).toFixed(2)}%` : d.data.name)
      .style("font-size", 20)
      .attr("y", 15)
      .attr("x", 25)
      .style("opacity", 1)
      .style("fill", myColors.grayBlue);
  }

  render() {
    return (
      <div>
        <div className="pie-chart" ref="pieChart" />
      </div>
    );
  }
}
export default PieChart;

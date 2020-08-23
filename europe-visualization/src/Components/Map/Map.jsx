import React, { Component } from "react";
import * as d3 from "d3";
import * as topojson from "topojson";
import _ from "lodash";
import Modal from "react-responsive-modal";

import "./Map.scss";
import constants from "../../constants";
import Navbar from "../Navbar/Navbar";
import * as Colors from "../../_colors.scss";
import europeData from "../../Data/europeData";
import * as colors from "../../_colors.scss";
import ModalComponent from "../Modal/ModalComponent";

//source: lab examples, project from my internship, https://blog.robertjesionek.com/d3js-geo/
class Map extends Component {

  constructor() {
    super();
    this.state = ({
      showModal: false,
      dataToShow: null,
    })
  }

  //function that creates a path for the map
  getPath = () => {
    const projection = d3.geoMercator()
      .center([0, 56])
      .scale(650)
      .translate([constants.width / 2, constants.height / 2])
    return d3.geoPath().projection(projection);
  }

  //function that returns information based on chosen category
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

  //function that handles zoom on the map
  zoom = () => {
    return d3.zoom()
      .scaleExtent([1, 20])
      .on("zoom", function () {
        d3.select("#europeMap").selectAll("path")
          .attr("transform", d3.event.transform)
      });
  }

  //function that removes the map
  removeMap = () => {
    d3.select("#europeMap").selectAll("*").remove();
  }

  //function that creates the map
  drawMap = () => {
    this.removeMap();
    const path = this.getPath();

    //draws the map based on given topojson file
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
        //add interaction to the map -> display info on hover for each country
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
        })
        //add interaction to the map -> change state on click -> opens modal
        .on("click", (d) => {
          console.log(d.id);
          this.setState({
            showModal: true,
            dataToShow: d.id,
          });
          d3.select("#tooltip").style("opacity", 0);
        });
    });
  }

  //function that fills each country with different opacity based on chosen category
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

    //same as drawing inside drawMap function
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
        //set opacity based on data for chosen category
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
        //add interaction to the map -> display info on hover for each country
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
        })
        //add interaction to the map -> change state on click -> opens modal
        .on("click", (d) => {
          console.log(d.id);
          this.setState({
            showModal: true,
            dataToShow: d.id,
          });
        });
    });
  }

  //function that changes state used for closing modal
  closeModal = () => {
    this.setState({
      showModal: false,
      dataToShow: null,
    })
  }

  render() {
    const showModal = this.state.showModal;
    const dataToShow = this.state.dataToShow;
    return (
      <div>
        <Navbar
          fillMap={this.fillMap}
          drawMap={this.drawMap}
          displayChart={this.displayEuropeChart}
          closeModal={this.closeModal}
        />
        <svg id="europeMap">
          {this.drawMap()}
        </svg>
        <text id="tooltip">
        </text>
        <div>
          {showModal && <Modal
            className="europe-map__modal"
            open={showModal}
            onClose={() => this.closeModal()}
            closeOnOverlayClick={true}
            showCloseIcon={false}
            closeOnEsc={true}
            center={true}
            styles={{
              overlay: {
                display: "block",
                position: "fixed",
                overflowY: "auto",
                overflowX: "hidden",
                width: "100%",
                height: "100%",
                alignItems: "flex-start",
              },
              modal: {
                backgroundImage: "linear-gradient(to top, rgba(253, 203, 241, 0.6) 0%," +
                  "rgba(253, 203, 241, 0.6) 1%, rgba(230, 222, 233, 0.6) 100%)",
                height: "90%",
                width: "90%",
                borderRadius: "10px",
                margin: "auto",
                boxShadow: "0px 4px 8px 0px gray",
              },
            }}
          >
            <div className="europe-map__modal__close" onClick={() => this.closeModal()}>
              Close
            </div>
            {showModal && <ModalComponent dataToShow={dataToShow} />}
          </Modal>
          }
        </div>
      </div>
    );

  }
}

export default Map;

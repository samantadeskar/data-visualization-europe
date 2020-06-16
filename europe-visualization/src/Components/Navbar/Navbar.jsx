import React, { Component } from "react";
import classnames from "classnames";
import Modal from "react-bootstrap/Modal";

import "./Navbar.scss";
import "../../constants";
import constants from "../../constants";
import PieChart from "../Charts/PieChart/PieChart";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showButton: false,
      showModal: false,
      chart: null,
      dataToShow: null,
    };
    this.handleOnClickShow = this.handleOnClickShow.bind(this);
    this.handleOnClickButton = this.handleOnClickButton.bind(this);
  }

  handleOnClickShow = (value, e) => {
    this.props.fillMap(value, e);
    this.setState(prevState => ({
      ...prevState,
      showButton: !prevState.showButton,
    }));
  }

  handleOnClickButton = () => {
    this.props.drawMap();
    this.setState(prevState => ({
      ...prevState,
      showButton: !prevState.showButton,
    }));
  }

  displayChart = (chart, dataToShow) => {
    this.setState({
      showModal: true,
      chart: chart,
      dataToShow: dataToShow,
    });
  }

  closeChart = () => {
    this.setState({
      showModal: false,
      chart: null,
      dataToShow: null,
    });
  }

  showData = () => {
    return (
      this.state.showModal
      && <PieChart
        dataToShow={this.state.dataToShow}
        country={constants.europe}
      />
    );
  }

  render() {
    const showModal = this.state.showModal;
    const showButton = this.state.showButton;
    return (
      <div className="navbar">
        <div className="navbar__dropdown-surface">
          Surface
          <div className="navbar__dropdown-surface__content">
            <div onClick={() => this.displayChart(constants.pie, constants.surface)}>PIE CHART</div>
            <div>BAR CHART</div>
            <div onClick={(e) => this.handleOnClickShow(constants.surface, e)}>SHOW ON MAP</div>
          </div>
        </div>
        <div className="navbar__dropdown-population">
          Population
          <div className="navbar__dropdown-population__content">
            <div onClick={() => this.displayChart(constants.pie, constants.population)}>PIE CHART</div>
            <div>BAR CHART</div>
            <div onClick={(e) => this.handleOnClickShow(constants.population, e)}>SHOW ON MAP</div>
          </div>
        </div>
        <div className="navbar__dropdown-gdp">
          GDP per capita
          <div className="navbar__dropdown-gdp__content">
            <div>BAR CHART</div>
            <div onClick={(e) => this.handleOnClickShow(constants.gdp, e)}>SHOW ON MAP</div>
          </div>
        </div>
        <div
          className={classnames({
            "navbar__button-clear": true,
            "shown": showButton,
          })}
          onClick={() => this.handleOnClickButton()}
        >
          CLEAR MAP
        </div>
        <Modal
          className="navbar__modal"
          show={showModal}
          animation={false}
        >
          <div
            className="navbar__modal__header"
            onClick={() => this.closeChart()}
          >
            Close
          </div>
          <Modal.Body>{this.showData()}</Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Navbar;
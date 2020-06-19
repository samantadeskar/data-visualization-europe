import React, { Component } from "react";
import classnames from "classnames";
import Modal from "react-responsive-modal";

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
     this.state.showModal && <PieChart
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
            <div onClick={() => this.displayChart(constants.bar, constants.surface)}>BAR CHART</div>
            <div onClick={(e) => this.handleOnClickShow(constants.surface, e)}>SHOW ON MAP</div>
          </div>
        </div>
        <div className="navbar__dropdown-population">
          Population
          <div className="navbar__dropdown-population__content">
            <div onClick={() => this.displayChart(constants.pie, constants.population)}>PIE CHART</div>
            <div onClick={() => this.displayChart(constants.bar, constants.population)}>BAR CHART</div>
            <div onClick={(e) => this.handleOnClickShow(constants.population, e)}>SHOW ON MAP</div>
          </div>
        </div>
        <div className="navbar__dropdown-gdp">
          GDP per capita
          <div className="navbar__dropdown-gdp__content">
            <div onClick={() => this.displayChart(constants.bar, constants.gdp)}>BAR CHART</div>
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
        <div>
          {showModal && <Modal
            className="navbar__modal"
            open={showModal}
            onClose={() => this.closeChart()}
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
                backgroundImage: "linear-gradient(to top, rgba(253, 203, 241, 0.6) 0%, rgba(253, 203, 241, 0.6) 1%, rgba(230, 222, 233, 0.6) 100%)",
                height: "90%",
                width: "90%",
                borderRadius: "10px",
                margin: "auto",
                boxShadow: "0px 4px 8px 0px gray",
              },
            }}
          >
            <div className="navbar__modal__close" onClick={() => this.closeChart()}>
              Close
            </div>
            {showModal && this.showData()}
          </Modal>
          }
        </div>
      </div >
    );
  }
}

export default Navbar;
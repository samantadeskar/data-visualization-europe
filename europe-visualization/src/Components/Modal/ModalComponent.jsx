import React, { Component } from "react";
import _ from "lodash";

import "./ModalComponent.scss";
import europeData from "../../Data/europeData";
import constants from "../../constants";
import PieChart from "../Charts/PieChart/PieChart";

class ModalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      religion: false,
    });
  }
  getCountry = countryId => {
    return _.find(europeData, ["id", countryId]);
  }

  showChart = chartType => {
    switch (chartType) {
      case constants.religion:
        this.setState({
          religion: true,
        });
        break;
      default: break;
    }
  }

  render() {
    const country = this.getCountry(this.props.dataToShow);
    return (
      <div className="country-modal">
        <div className="country-modal__country-name">{country.name}</div>
        <div className="country-modal__religion" onClick={() => this.showChart(constants.religion)}>Religion</div>
        <div className="country-modal__chart">
          {
            this.state.religion
            && <PieChart
              country={country}
              dataToShow={constants.religion}
            />
          }
        </div>
      </div>
    );
  }
}

export default ModalComponent;
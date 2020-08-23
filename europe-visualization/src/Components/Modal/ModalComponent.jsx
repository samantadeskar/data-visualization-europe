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
      urbanRural: false,
      showChart: false,
    });
  }
  getCountry = countryId => {
    return _.find(europeData, ["id", countryId]);
  }

  //function that changes the state used for displaying the correct chart based on a chosen category
  showChart = chartType => {
    switch (chartType) {
      case constants.religion: {
        this.setState({
          religion: true,
          urbanRural: false,
        });
        break;
      }
      case constants.urbanRural: {
        this.setState({
          urbanRural: true,
          religion: false,
        });
        break;
      }
      default: break;
    }
  }

  render() {
    const country = this.getCountry(this.props.dataToShow);
    return (
      <div className="country-modal">
        <div className="country-modal__country-name">{country.name}</div>
        <div className="country-modal__religion" onClick={() => this.showChart(constants.religion)}>Religion</div>
        <div className="country-modal__urban-rural" onClick={() => this.showChart(constants.urbanRural)}>Urban vs. Rural</div>
        <div className="country-modal__chart">
          {
            (this.state.religion || this.state.urbanRural)
            && <PieChart
              country={country}
              dataToShow={this.state.religion ? constants.religion : constants.urbanRural}
            />
          }
        </div>
      </div>
    );
  }
}

export default ModalComponent;

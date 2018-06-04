import React, { Component } from 'react';

import './../public/css/Total.css';
import './../public/css/Assets.css';

class Total extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endingBalance: '',
      totalPerformance: '',
      quarterlyPerformance: '',
    }
  }

  componentDidMount() {
    this.setState({
      endingBalance: this.props.data.ending_balance,
      totalPerformance: this.props.data.total_performance,
      quarterlyPerformance: this.props.data.quarterly_performance,
    });
  }

  render() {
    return (
      <div className="total">
        <p className="category-title total-title"><strong>TOTAL</strong></p>
        <div className="total-section">
          <div>
            <p className="p-title t-text">CURRENT BALANCE</p>
            <hr className="t-div" />
            <p className="p-desc t-text">{ this.state.endingBalance }</p>
          </div>

          <div>
            <p className="p-title t-text">TOTAL PERFORMANCE</p>
            <hr className="t-div"/>
            <p className="p-desc t-text">{ this.state.totalPerformance }</p>
          </div>

          <div>
            <p className="p-title t-text">QUARTERLY PERFORMANCE</p>
            <hr className="t-div"/>
            <p className="p-desc t-text">{ this.state.quarterlyPerformance }</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Total;

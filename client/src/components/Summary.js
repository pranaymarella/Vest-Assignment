import React, { Component } from 'react';
import './../public/css/Summary.css';
import { Doughnut } from 'react-chartjs-2';

const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [75, 75, 150],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

class Summary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			beginningBalance: '',
			changeInBalance: '',
			endingBalance: '',
		}
	}

	componentDidMount() {
		this.setState({
			beginningBalance: this.props.data.beginning_balance,
			changeInBalance: this.props.data.change_in_balance,
			endingBalance: this.props.data.ending_balance,
		});
	}

  render() {
    return (
      <div className="summary">
        <p className="category-title"><strong>Summary</strong></p>

        <div className="summary-item">
					<div className="set-width">
          	<p>BEGINNING BALANCE</p>
					</div>
          <div className="divider">
          </div>
          <p className="summary-balance">{this.state.beginningBalance}</p>
        </div>

        <div className="summary-item">
					<div className="set-width">
          	<p>CHANGE IN BALANCE</p>
					</div>
          <div className="divider">
          </div>
          <p className="summary-balance">{this.state.changeInBalance}</p>
        </div>

        <div className="summary-item">
					<div className="set-width">
          	<p>ENDING BALANCE</p>
					</div>
          <div className="divider">
          </div>
          <p className="summary-balance">{this.state.endingBalance}</p>
        </div>

        <p className="asset-mix-title">ASSET MIX</p>
        <Doughnut
          data={data}
        />
      </div>
    );
  }
}

export default Summary;

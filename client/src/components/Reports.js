import React, { Component } from 'react';
import Dropdown from './Dropdown.js';
import Summary from './Summary.js';
import Assets from './Assets.js';
import Total from './Total.js';
import Transactions from './Transactions.js';

import './../public/css/Reports.css';

class Reports extends Component {
  state = {
    loading: true,
    api: [],
  }

  componentDidMount() {
    this.fetchProcess().then(res => this.setState({loading: false, api: res[0]}));
  }

  fetchProcess = async () => {
    const response = await fetch('http://harborhq.us-east-2.elasticbeanstalk.com/api/publictest/');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  }

  render() {

    const header = (
      <header className="App-header">
        <h1 className="App-title">Reports</h1>
      </header>
    );

    const reportsTitle = (
      <div className="reports-title">
        <p>Q1 2017 Statement (Sep-Dec)</p>
      </div>
    );

    const body = (
      <div className="test">
        { reportsTitle }
        {this.state.loading ? '' : <Summary data={this.state.api} />}
        {this.state.loading ? '' : <Assets data={this.state.api} />}
        {this.state.loading ? '' : <Total data={this.state.api} />}
        {this.state.loading ? '' : <Transactions data={this.state.api} />}
      </div>
    );

    return (
      <div>
        { header }
        <Dropdown />
        { this.state.loading ? '' : body }
      </div>
    );
  }
}

export default Reports;

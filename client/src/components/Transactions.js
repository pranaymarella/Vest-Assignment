import React, { Component } from 'react';

import './../public/css/Transactions.css';

class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      api: []
    }
  }

  componentDidMount() {
    this.setState({
      api: this.props.data,
      loading: false
    });
  }

  changeDate = (val) => {
    let x = val.split("-");
    let y = x[1] + '/' + x[2] + '/' + x[0];
    return y;
  }

  render() {
    return (
      <div>
        <p className="category-title"><strong>Transactions</strong></p>
        <table className="trans-table">
          <thead>
            <tr>
              <th>TYPE</th>
              <th>DATE</th>
              <th>AMOUNT</th>
              <th>NOTES</th>
            </tr>
          </thead>
          <tbody>
            { this.state.loading ? <tr></tr> : this.state.api.transactions_list.map((p, index) =>
              <tr key={index}>
                <td>{p.action}</td>
                <td>{this.changeDate(p.date)}</td>
                <td className="t-amount">{p.amount}</td>
                <td className="t-notes">{p.quantity !== "" ? p.quantity : '/'}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Transactions;

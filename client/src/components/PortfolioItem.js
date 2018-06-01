import React, { Component } from 'react';

import './../public/css/Assets.css';

class PortfolioItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      ticker: '',
      price: '',
      expenseRatio: '',
      totalShares: '',
      currentBalance: '',
      totalPerformance: '',
      quarterlyPerformance: ''
    };
  }

  componentDidMount() {
    this.setState({
      ticker: this.props.asset.ticker,
      name: this.props.asset.fund_name,
      price: this.props.asset.market_price,
      totalShares: this.props.asset.quantity,
      expenseRatio: this.props.asset.exp_ratio,
      currentBalance: this.props.asset.balance,
      totalPerformance: this.props.asset.tot_perf,
      quarterlyPerformance: this.props.asset.qtr_perf
    });
  }

  render() {
    return (
      <div>
        <p className="asset-title"><strong>{this.state.ticker} / {this.state.name}</strong></p>

        <div className="portfolio-item">
          <div>
            <p className="p-title">PRICE</p>
            <hr className="p-divider" />
            <p className="p-desc">{ this.state.price }</p>
            <p className="p-title">TOTAL SHARES</p>
            <hr className="p-divider" />
            <p className="p-desc">{ this.state.totalShares }</p>
            <p className="p-title">TOTAL PERFORMANCE</p>
            <hr className="p-divider" />
            <p className="p-desc">{ this.state.totalPerformance }</p>
          </div>

          <div>
            <p className="p-title">EXPENSE RATIO</p>
            <hr className="p-divider" />
            <p className="p-desc">{ this.state.expenseRatio }</p>
            <p className="p-title">CURRENT BALANCE</p>
            <hr className="p-divider" />
            <p className="p-desc">{ this.state.currentBalance }</p>
            <p className="p-title">QUARTERLY PERFORMANCE</p>
            <hr className="p-divider" />
            <p className="p-desc">{ this.state.quarterlyPerformance }</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioItem;

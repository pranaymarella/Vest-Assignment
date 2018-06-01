import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem.js';
import './../public/css/Assets.css';

class Assets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      data: [],
    }
  }

  componentDidMount() {
    this.setState({
      data: this.props.data,
      loaded: true,
    });
  }

  render() {
    return (
      <div>
        <p className="category-title"><strong>Assets</strong></p>
        { this.state.loaded ?
          this.state.data.portfolio.map(p => <PortfolioItem key={p.ticker} asset={p} />)
          : '' }
      </div>
    );
  }
}

export default Assets;

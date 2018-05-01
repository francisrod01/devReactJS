import React, { Component } from 'react';

import base from './base';


class Campaigns extends Component {
  constructor(props) {
    super(props);

    this.state = {
      campaigns: {}
    }
  }
  componentDidMount() {
    base.syncState('campaigns', {
      context: this,
      state: 'campaigns',
      asArray: false
    });
  }
  renderCampaign = (index, campaign) => (
    <li key={index}>{campaign.name}</li>
  );
  render() {
    return (
      <div>
        <h1>Campaigns</h1>

        <ul>
          {
            Object
              .keys(this.state.campaigns)
              .map(key => this.renderCampaign(key, this.state.campaigns[key]))
          }
        </ul>
      </div>
    )
  }
}

export default Campaigns;

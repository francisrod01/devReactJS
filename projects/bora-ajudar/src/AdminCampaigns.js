import React, { Component } from 'react';

import base from './base';


class Campaigns extends Component {
  constructor(props) {
    super(props);

    this.state = {
      campaigns: {}
    }


    // Bindable functions to access this object.
    this.renderCampaign = this.renderCampaign.bind(this);
    this.remove = this.remove.bind(this);
  }
  componentDidMount() {
    base.syncState('campaigns', {
      context: this,
      state: 'campaigns',
      asArray: false
    });
  }
  renderCampaign = (index, campaign) => (
    <li key={index}>
      {campaign.name}
      &nbsp;
      <button onClick={() => null}>Edit</button>
      <button onClick={() => null}>Remove</button>
    </li>
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

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
    this.handleSave = this.handleSave.bind(this);
    this.remove = this.remove.bind(this);
  }
  componentDidMount() {
    base.syncState('campaigns', {
      context: this,
      state: 'campaigns',
      asArray: false
    });
  }
  handleSave() {
    const name = this.name.value;
    const description = this.description.value;

    base.push('campaigns', {
      data: { name, description },
      then: err => {
        if (err) {
          console.log('Error to save it: ', err)
        }
        else {
          this.name.value = '';
          this.description.value = '';
        }
      }
    });
  }
  remove(key) {
    // const {
    //   [key]: undefined,
    //   ...newCampaignsObject
    // } = this.state.campaigns;

    // this.setState({ campaigns: newCampaignsObject });

    base.remove(`campaigns/${key}`, err => {
      console.log('Error to remove: ', err);
    });
  }
  renderCampaign = (index, campaign) => (
    <li key={index}>
      {campaign.name}
      &nbsp;
      <button onClick={() => null}>Edit</button>
      <button onClick={() => this.remove(index)}>Remove</button>
    </li>
  );
  render() {
    return (
      <div>
        <h1>Campaigns</h1>

        <div>
          <h2>New Campaign</h2>
          Name: <input type='text' ref={ref => this.name = ref} />
          <br />Description: <textarea ref={ref => this.description = ref}></textarea>
          <br /><button onClick={this.handleSave}>Save</button> 
        </div>

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

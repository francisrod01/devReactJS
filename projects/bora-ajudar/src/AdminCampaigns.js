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
    const subtitle = this.subtitle.value;
    const description = this.description.value;
    const type = this.state.type;
    const howDonate = this.state.type === 'products' ? this.howDonate.value : null;
    const goal = this.state.type === 'donate' ? this.goal.value : null;
    const donated = this.state.type === 'donate' ? this.donated.value : null;

    base.push('campaigns', {
      data: { name, subtitle, description, type, howDonate, goal, donated },
      then: err => {
        if (err) {
          console.log('Error to save it: ', err)
        }
        else {
          this.name.value = '';
          this.subtitle.value = '';
          this.description.value = '';
          this.setState({ type: '' });
          
          if (this.meta) {
            this.meta.value = '';
          }

          if (this.donated) {
            this.donated.value = '';
          }

          if (this.howDonate) {
            this.howDonate.value = '';
          }
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
          <br />Subtitle: <input type='text' ref={ref => this.subtitle = ref} />
          <br />Description: <textarea ref={ref => this.description = ref}></textarea>
          <br />Type:
          <br /><input type='radio' name='type' onClick={() => this.setState({ type: 'donate' })} /> Donation
          <br /><input type='radio' name='type' onClick={() => this.setState({ type: 'products' })} /> Products
          
          {this.state.type === 'donate' && (
            <div>
              <h4>Donation</h4>
              Goal: <input type='text' ref={ref => this.goal = ref} />
              <br />Donated: <input type='text' ref={ref => this.donated = ref} defaultValue={0} />
            </div>
          )}

          {this.state.type === 'products' && (
            <div>
              <h4>Products</h4>
              How to donate: <input type='text' ref={ref => this.howDonate = ref} />
            </div>
          )}

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

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import base from './base';


class AdminEditCampaign extends Component {
  constructor(props) {
    super(props);

    this.state = {
      campaign: {},
      isLoading: true,
      saved: false
    }


    // Bindable functions to access this object.
    this.handleSave = this.handleSave.bind(this);
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    base.fetch(`campaigns/${id}`, {
      context: this,
      asArray: false,
      then: (campaign => {
        this.setState({
          campaign,
          type: campaign.type,
          isLoading: false
        });
      })
    });
  }
  handleSave() {
    const { id } = this.props.match.params;
    const name = this.name.value;
    const subtitle = this.subtitle.value;
    const description = this.description.value;
    const type = this.state.type;
    const howDonate = this.state.type === 'products' ? this.howDonate.value : null;
    const goal = this.state.type === 'donate' ? this.goal.value : null;
    const donated = this.state.type === 'donate' ? this.donated.value : null;

    base.update(`campaigns/${id}`, {
      data: { name, subtitle, description, type, howDonate, goal, donated },
      then: err => {
        if (err) {
          console.log('Error to save it: ', err)
        }
        else {
          this.setState({ saved: true });
        }
      }
    });
  }
  render() {
    const {
      campaign: { name, subtitle, description, howDonate, type, goal, donated },
      isLoading, saved
    } = this.state;

    if (saved) {
      return <Redirect to='/admin/campaigns' />
    }

    if (isLoading) {
      return <p>Loading...</p>
    }

    return (
      <div>
        <h1>Edit Campaign</h1>

        <div>
          Name: <input type='text' defaultValue={name} ref={ref => this.name = ref} />
          <br />Subtitle: <input type='text' defaultValue={subtitle} ref={ref => this.subtitle = ref} />
          <br />Description: <textarea defaultValue={description} ref={ref => this.description = ref}></textarea>
          <br />Type:
          <br /><input type='radio' name='type' defaultChecked={type === 'donate'} onClick={() => this.setState({ type: 'donate' })} /> Donation
          <br /><input type='radio' name='type' defaultChecked={type === 'products'} onClick={() => this.setState({ type: 'products' })} /> Products
          
          {this.state.type === 'donate' && (
            <div>
              <h4>Donation</h4>
              Goal: <input type='text' defaultValue={goal} ref={ref => this.goal = ref} />
              <br />Donated: <input type='text' defaultValue={donated} ref={ref => this.donated = ref} />
            </div>
          )}

          {this.state.type === 'products' && (
            <div>
              <h4>Products</h4>
              How to donate: <input type='text' defaultValue={howDonate} ref={ref => this.howDonate = ref} />
            </div>
          )}

          <br /><button onClick={this.handleSave}>Save</button> 
        </div>
      </div>
    )
  }
}

export default AdminEditCampaign;

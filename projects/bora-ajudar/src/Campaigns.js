import React, { Component } from 'react';
import axios from 'axios';

import base from './base';


const API_URL = process.env.REACT_APP_API_URL;

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
  handleDonate(key) {
    axios
      .post(`${API_URL}/donate`, {
        campaign: key,
        value: 3
      })
      .then(response => {
        if (response.data && response.data.url) {
          window.location = response.data.url;
        }
      });
  }
  renderCampaign = (index, campaign) => (
    <section key={index} className='page-section'>
      <div className='container'>
        <div className='product-item bg-faded'>
          <div className='product-item-title d-flex'>
            <div className='p-5 d-flex mr-auto rounded'>
              <h2 className='section-heading mb-0'>
                <span className='section-heading-upper'>{campaign.subtitle}</span>
                <span className='section-heading-lower'>{campaign.name}</span>
              </h2>
            </div>
          </div>
          <div className='product-item-description d-flex ml-auto'>
            <div className='p-5 rounded'>
              <p className='mb-0'>{campaign.description}</p>

              {campaign.type === 'donate' && (
                <div>
                  <div className='progress'>
                    <div className='progress-bar bg-success' role='progressbar' style={{ width: '25%' }} aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'></div>
                  </div>
                  <p>Goal: R$ {campaign.goal} / Donated: R$ {campaign.donated}</p>
                  <div>
                    <button className='btn btn-success' onClick={() => this.handleDonate(index)}>Contribute</button>
                  </div>
                </div>
              )}

              {campaign.type === 'products' && (
                <div>
                  <h4>How to donate:</h4>
                  <p>{campaign.howDonate}</p>
                </div>
              )}

            </div>
          </div>
          <div className='ml-auto'>
            
          </div>
        </div>
      </div>
    </section>
  );
  render() {
    return (
      <div>
        <section className='page-section'>
          <div className='container'>
            <div className='product-item'>
              <div className='product-item-title d-flex'>
                <div className='bg-faded p-5 d-flex ml-auto rounded'>
                  <h2 className='section-heading mb-0'>
                    <span className='section-heading-upper'>Ajude-nos por nossas</span>
                    <span className='section-heading-lower'>Campanhas</span>
                  </h2>
                </div>
              </div>
              <img className='product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0' src='img/products-01-menor.jpg' alt='' />
              <div className='product-item-description d-flex mr-auto'>
                <div className='bg-faded p-5 rounded'>
                  <p className='mb-0'>We take pride in our work, and it shows. Every time you order a beverage from us, we guarantee that it will be an experience worth having. Whether it's our world famous Venezuelan Cappuccino, a refreshing iced herbal tea, or something as simple as a cup of speciality sourced black coffee, you will be coming back for more.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {
          Object
            .keys(this.state.campaigns)
            .map(key => this.renderCampaign(key, this.state.campaigns[key]))
        }
      </div>
    );
  }
}

export default Campaigns;

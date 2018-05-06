import React from 'react';


const Error404 = props => (
  <section className='page-section about-heading'>
    <div className='container'>
      <img className='img-fluid rounded about-heading-img mb-3 mb-lg-0' src='img/about-menor.jpg' alt='' />
      <div className='about-heading-content'>
        <div className='row'>
          <div className='col-xl-9 col-lg-10 mx-auto'>
            <div className='bg-faded rounded p-5'>
              <h2 className='section-heading mb-4'>
                <span className='section-heading-upper'>Ops, There was a problem</span>
                <span className='section-heading-lower'>Page not found</span>
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Error404;

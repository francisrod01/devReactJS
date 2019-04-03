import React from 'react';

import { Image } from 'semantic-ui-react';

import Header from '../Header';

const Home = props => (
  <div>
    <Header />

    <h1>Welcome!</h1>

    <div>
      <Image
        src={'/logos/logo-home.png'}
        alt={'Runs online - logo home'}
        size='medium'
        spaced
        centered
      />
    </div>
  </div>
);

export default Home;

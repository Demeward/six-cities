import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';

const Offers = {
  OFFERS_COUNT: offers.length,
};

ReactDOM.render(
  <React.StrictMode>
    <App offersCount={Offers.OFFERS_COUNT} offers={offers}/>
  </React.StrictMode>,
  document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Offers = {
  OFFERS_COUNT: 5,
};

ReactDOM.render(
  <React.StrictMode>
    <App offersCount={Offers.OFFERS_COUNT}/>
  </React.StrictMode>,
  document.getElementById('root'));

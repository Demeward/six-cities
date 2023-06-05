// import { useState } from 'react';
import Header from '../header/header';
import CitiesList from '../cities-list/cities-list';
import MainContent from '../main-content/main-content';
// import { Offer } from '../../types/offer';
// import {useSelector} from 'react-redux';
// import { changeCity } from '../../store/action';
// import { filterOffers } from '../../const';
// import {getCity, getOffers} from '../../store/main-data/selectors';
// import {useCallback} from 'react';


function MainPage(): JSX.Element {


  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList />
          </section>
        </div>
        <MainContent />
      </main>
    </div>
  );
}

export default MainPage;

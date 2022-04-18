import { useState } from 'react';
import OffersList from '../offers-list/offers-list';
import Header from '../header/header';
import CitiesList from '../cities-list/cities-list';
import NoOffers from '../no-offers/no-offers';
import Map from '../map/map';
import { State } from '../../types/state';
import { Dispatch } from '@reduxjs/toolkit';
import { Actions } from '../../types/action';
import { Offer } from '../../types/offer';
import { connect, ConnectedProps } from 'react-redux';
import { changeCity } from '../../store/action';
import { filterOffers } from '../../const';
import {getCity, getOffers} from '../../store/main-data/selectors';

const mapStateToProps = (state: State) => ({
  city: getCity(state),
  offers: getOffers(state),
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onChangeCity(city: string) {
    dispatch(changeCity(city));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function MainPage(props: PropsFromRedux): JSX.Element {

  const { city, offers, onChangeCity } = props;
  const [activeOffer, setActiveOffer] = useState<Offer | null>(null);
  const currentOffers = filterOffers(offers, city);

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className={`page__main page__main--index ${currentOffers.length === 0 ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList activeCity={city} onChangeCity={onChangeCity} />
          </section>
        </div>
        <div className="cities">
          <div className={`cities__places-container ${currentOffers.length === 0 ? 'cities__places-container--empty' : ''} container`}>
            {currentOffers.length !== 0
              ? <OffersList city={city} offers={currentOffers} onActiveOfferChange={setActiveOffer} />
              : <NoOffers city={city} />};
            <div className="cities__right-section">
              {currentOffers.length !== 0
                ? <section className="cities__map map"><Map offers={currentOffers} activeOffer={activeOffer} /></section>
                : ''};
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default connector(MainPage);

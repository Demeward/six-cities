import { useState } from 'react';
import OffersList from '../offers-list/offers-list';
import Header from '../header/header';
import CitiesList from '../cities-list/cities-list';
import NoOffers from '../no-offers/no-offers';
import Map from '../map/map';
import { Offer, CityType } from '../../types/offer';
import {useDispatch, useSelector} from 'react-redux';
import { changeCity } from '../../store/action';
import { filterOffers } from '../../const';
import {getCity, getOffers} from '../../store/main-data/selectors';


function MainPage(): JSX.Element {
  const city = useSelector(getCity);
  const offers = useSelector(getOffers);
  const dispatch = useDispatch();

  const onChangeCity = (cityName: CityType) => {
    dispatch(changeCity(cityName));
  };
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

export default MainPage;

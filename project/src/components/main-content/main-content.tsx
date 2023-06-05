import { useState } from 'react';
import OffersList from '../offers-list/offers-list';
import NoOffers from '../no-offers/no-offers';
import Map from '../map/map';
import { Offer } from '../../types/offer';
import {useSelector} from 'react-redux';
import { filterOffers } from '../../const';
import {getCity, getOffers} from '../../store/main-data/selectors';
import {useCallback} from 'react';
import {memo} from 'react';


function MainContent(): JSX.Element {
  const activeCity = useSelector(getCity);
  const offers = useSelector(getOffers);

  const [activeOffer, setActiveOffer] = useState<Offer | null>(null);
  const currentOffers = filterOffers(offers, activeCity);

  const toggleActiveOffer = useCallback((id: Offer | null) => {
    setActiveOffer(id);
  }, [],
  );

  return (
    <div className="cities">
      <div className={`cities__places-container ${currentOffers.length === 0 ? 'cities__places-container--empty' : ''} container`}>
        {currentOffers.length !== 0
          ? <OffersList city={activeCity} offers={currentOffers} onActiveOfferChange={toggleActiveOffer} />
          : <NoOffers city={activeCity} />}
        <div className="cities__right-section">
          {currentOffers.length !== 0
            ? <section className="cities__map map"><Map offers={currentOffers} activeOffer={activeOffer} /></section>
            : ''}
        </div>
      </div>
    </div>
  );
}

export default memo(MainContent);

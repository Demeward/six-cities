import React from 'react';
import NearbyOfferCard from '../nearby-offer/nearby-offer';
import {useSelector} from 'react-redux';
import {getNearbyOffers} from '../../store/property-data/selectors';


function NearbyOffers():JSX.Element {
  const nearbyOffers = useSelector(getNearbyOffers);

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {nearbyOffers.map((offer) => <NearbyOfferCard key={offer.id} offer={offer} />)}
      </div>
    </section>
  );
}

export default React.memo(NearbyOffers);

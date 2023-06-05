import React from 'react';
import NearbyOfferCard from '../nearby-offer/nearby-offer';
// import {useSelector} from 'react-redux';
import { Offer } from '../../types/offer';

type NearbyType = {
  nearby: Offer[],
  offerId: number,
}

function NearbyOffers({nearby, offerId}: NearbyType):JSX.Element {
  // eslint-disable-next-line no-console
  console.log('nearbyyyy');

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {nearby.map((offer) => <NearbyOfferCard key={offer.id} offer={offer} currentId={offerId} />)}
      </div>
    </section>
  );
}

export default React.memo(NearbyOffers);

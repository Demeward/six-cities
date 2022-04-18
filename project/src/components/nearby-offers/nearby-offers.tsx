import React from 'react';
import NearbyOfferCard from '../nearby-offer/nearby-offer';
import { OfferType } from '../../types/offer';


type NearbyType = {
  nearbyOffers: OfferType,
}

function NearbyOffers({ nearbyOffers }: NearbyType): JSX.Element {

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {nearbyOffers.map((offer) => <NearbyOfferCard key={offer.id} offer={offer} />)}
      </div>
    </section>
  );
}

export default React.memo(NearbyOffers, (prevProps, nextProps) => prevProps.nearbyOffers === nextProps.nearbyOffers);

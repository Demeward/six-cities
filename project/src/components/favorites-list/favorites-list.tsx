import {Offer} from '../../types/offer';
import FavoriteOffer from '../favorite-offer/favorite-offer';
import React from 'react';

type MainOffers = {
  offers: Offer[],
}

function FavoritesList({offers}: MainOffers): JSX.Element {
  const favoriteOffers = offers.filter((item) => item.isFavorite);
  return (
    <>
      {favoriteOffers.map((offer) => <FavoriteOffer key={offer.id} offer={offer} />)}
    </>
  );
}

export {FavoritesList};
export default React.memo(FavoritesList,
  (prevProps, nextProps) => prevProps.offers === nextProps.offers);

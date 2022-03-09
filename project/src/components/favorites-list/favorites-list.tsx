import {Offer} from '../../types/offer';
import FavoriteOffer from '../favorite-offer/favorite-offer';

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

export default FavoritesList;

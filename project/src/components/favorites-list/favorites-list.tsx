import {Offer} from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type MainOffers = {
  offers: Offer[],
}

function FavoritesList({offers}: MainOffers): JSX.Element {
  const favoriteOffers = offers.filter((item) => item.isFavorite);
  return (
    <>
      {favoriteOffers.map((offer) => <OfferCard key={offer.id} offer={offer} />)}
    </>
  );
}

export default FavoritesList;

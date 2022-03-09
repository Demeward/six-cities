import {Offer} from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type MainOffers = {
  offers: Offer[],
  onOffersListCardHover: (activeOfferId: number | null) => void,
}

function OffersList({offers, onOffersListCardHover}: MainOffers): JSX.Element {
  return (
    <>
      {offers.map((offer) => <OfferCard key={offer.id} offer={offer} onOffersListCardHover={onOffersListCardHover}/>)}
    </>
  );
}

export default OffersList;

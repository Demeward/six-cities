import {Offer} from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type MainOffers = {
  offersCount: number,
  offers: Offer[],
}

function OffersList({offersCount, offers}: MainOffers): JSX.Element {
  return (
    <>
      {offers.map((offer) => <OfferCard key={offer.id} offer={offer} />)}
    </>
  );
}

export default OffersList;

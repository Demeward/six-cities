import Property from '../property/property';
import { Offer } from '../../types/offer';
import { useEffect } from 'react';
import {fetchOfferAction, fetchNearbyOffersAction, fetchReviewsAction} from '../../store/api-actions';
import {fillOffer} from '../../store/action';
import {useDispatch} from 'react-redux';

type PropertyScreenProps = {
  offerId: number
  offer?: Offer
}

function PropertyScreen(props: PropertyScreenProps):JSX.Element {
  const dispatch = useDispatch();

  const fetchOffer = (id: number) => {
    dispatch(fetchOfferAction(id));
  };

  const fetchReviews = (id: number) => {
    dispatch(fetchReviewsAction(id));
  };

  const fetchNearbyOffers = (id: number) => {
    dispatch(fetchNearbyOffersAction(id));
  };

  const fillProperty = (offer: Offer) => {
    dispatch(fillOffer(offer));
  };
  const {offer, offerId} = props;

  // eslint-disable-next-line no-console
  console.log(offer);

  useEffect(() => {
    if (offer === undefined) {
      fetchOffer(offerId);
    } else {
      fillProperty(offer);
    }
  }, [offer, offerId]);

  fetchReviews(offerId);
  fetchNearbyOffers(offerId);

  return (
    <div className="page">
      <Property />
    </div>
  );
}

export default PropertyScreen;

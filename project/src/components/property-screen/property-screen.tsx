import Property from '../property/property';
import { Offer } from '../../types/offer';
import {Actions, ThunkAppDispatch} from '../../types/action';
import {Dispatch} from '@reduxjs/toolkit';
import {fetchOfferAction, fetchNearbyOffersAction, fetchReviewsAction} from '../../store/api-actions';
import {fillOffer} from '../../store/action';
import {connect, ConnectedProps} from 'react-redux';

type PropertyScreenProps = {
  offerId: number,
  offer?: Offer,
}

const mapDispatchToProps = (dispatch: ThunkAppDispatch | Dispatch<Actions>) => ({
  fetchOffer(id: number) {
    (dispatch as ThunkAppDispatch)(fetchOfferAction(id));
  },
  fetchReviews(id: number) {
    (dispatch as ThunkAppDispatch)(fetchReviewsAction(id));
  },
  fetchNearbyOffers(id: number) {
    (dispatch as ThunkAppDispatch)(fetchNearbyOffersAction(id));
  },
  fillProperty(offer: Offer) {
    (dispatch as Dispatch<Actions>)(fillOffer(offer));
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & PropertyScreenProps;

function PropertyScreen(props: ConnectedComponentProps): JSX.Element {
  const {fetchOffer, fetchReviews, fetchNearbyOffers, fillProperty, offer, offerId} = props;

  if (offer === undefined) {
    fetchOffer(offerId);
  } else {
    fillProperty(offer);
  }

  fetchReviews(offerId);
  fetchNearbyOffers(offerId);

  return (
    <div className="page">
      <Property />
    </div>
  );
}

export default connector(PropertyScreen);

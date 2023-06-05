// import Property from '../property/property';
// // import { Offer } from '../../types/offer';
// // import { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// // import Loader from '../loader/loader';
// // import NoPage from '../no-page/no-page';
// import {fetchOfferAction, fetchNearbyOffersAction, fetchReviewsAction} from '../../store/api-actions';
// // import {fillOffer} from '../../store/action';
// import {useAppDispatch, useAppSelector} from '../../types/action';
// import { getOffers } from '../../store/main-data/selectors';
// import Loader from '../loader/loader';
//
// // type PropertyScreenProps = {
// //   offerId: number
// //   offer?: Offer
// // }
//
// function PropertyScreen():JSX.Element {
//   const dispatch = useAppDispatch();
//   const offers = useAppSelector(getOffers);
//   const { id } = useParams<{ id: string }>();
//
//
//   const offerId = Number(id);
//   const offer = offers.find((item) => item.id === offerId);
//
//   // const fillProperty = (currentOffer: Offer) => {
//   //   dispatch(fillOffer(currentOffer));
//   // };
//   // const {offer, offerId} = props;
//
//   // eslint-disable-next-line no-console
//   console.log(offer);
//
//   if (offer === null || offer?.id !== offerId) {
//     return <Loader />;
//   } else {
//     dispatch(fetchOfferAction(offerId));
//     dispatch(fetchNearbyOffersAction(offerId));
//     dispatch(fetchReviewsAction(offerId));
//   }
//
//   return (
//     <div className="page">
//       <Property/>
//     </div>
//   );
// }

export {};

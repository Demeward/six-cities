import { useParams } from 'react-router-dom';
import NoPage from '../no-page/no-page';
import PropertyScreen from '../property-screen/property-screen';
import {OfferType} from '../../types/offer';

type OffersProps = {
  offers: OfferType,
}

function PropertyRoute(props: OffersProps): JSX.Element {
  const { offers } = props;
  const { id } = useParams<{ id: string }>();
  const offerId = Number(id);
  const offer = offers?.find((item) => item.id === offerId);
  return offer === undefined ? <NoPage /> : <PropertyScreen offerId={offerId} offer={offer} />;
}

export default PropertyRoute;

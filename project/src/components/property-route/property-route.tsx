import { useParams } from 'react-router-dom';
import NoPage from '../no-page/no-page';
import PropertyScreen from '../property-screen/property-screen';
import { useSelector } from 'react-redux';
import { getOffers } from '../../store/main-data/selectors';

function PropertyRoute(): JSX.Element {
  const offers = useSelector(getOffers);
  const { id } = useParams<{ id: string }>();


  const offerId = Number(id);
  const offer = offers.find((item) => item.id === offerId);

  return offer === undefined ? <NoPage /> : <PropertyScreen offerId={offerId} offer={offer}/>;
}

export default PropertyRoute;

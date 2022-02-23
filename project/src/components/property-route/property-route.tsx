import { useParams } from 'react-router-dom';
import NoPage from '../no-page/no-page';
import {Offer} from '../../types/offer';
import Property from '../property/property';

type PropertyRouteProps = {
  offers: Offer[];
}

function PropertyRoute({offers}: PropertyRouteProps): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const offer = offers.find((item) => item.id === Number(id));
  return offer === undefined ? <NoPage /> : <Property offer={offer} />;
}

export default PropertyRoute;

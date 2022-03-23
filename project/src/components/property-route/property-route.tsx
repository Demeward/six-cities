import { useParams } from 'react-router-dom';
import NoPage from '../no-page/no-page';
import Property from '../property/property';
import {State} from '../../types/state';
// import {Offer} from '../../types/offer';
import {connect, ConnectedProps} from 'react-redux';

type PropsFromRedux = ConnectedProps<typeof connector>;

const mapStateToProps = ({offers}: State) => ({
  offers,
});

const connector = connect(mapStateToProps);

function PropertyRoute(props: PropsFromRedux): JSX.Element {
  const { offers } = props;
  const { id } = useParams<{ id: string }>();
  const offer = offers.find((item) => item.id === Number(id));
  return offer === undefined ? <NoPage /> : <Property offers={offers} offer={offer} />;
}

export {PropertyRoute};
export default connector(PropertyRoute);

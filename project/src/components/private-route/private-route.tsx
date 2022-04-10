import { Navigate, RouteProps } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import {State} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';

const mapStateToProps = ({authorizationStatus}:State) => ({
  authorizationStatus,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & PrivateRouteProps;

type PrivateRouteProps = RouteProps & {
  children: JSX.Element;
  authorizationStatus: AuthorizationStatus;
}

function PrivateRoute(props: ConnectedComponentProps): JSX.Element {
  const { children, authorizationStatus } = props;
  return authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login} />;
}

export default connector(PrivateRoute);

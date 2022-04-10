import Logo from '../logo/logo';
import { State } from '../../types/state';
import { connect, ConnectedProps } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import LoggedIn from '../logged-in/logged-in';
import LoggedOut from '../logged-out/logged-out';

const mapStateToProps = ({ authorizationStatus }: State) => ({
  authorizationStatus,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;


function Header(props: PropsFromRedux): JSX.Element {

  const { authorizationStatus } = props;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <nav className="header__nav">
            <ul className="header__nav-list">
              {(authorizationStatus === AuthorizationStatus.Auth)
                ? <LoggedIn />
                : <LoggedOut />}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default connector(Header);

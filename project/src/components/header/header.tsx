import Logo from '../logo/logo';
import {useSelector} from 'react-redux';
import { AuthorizationStatus } from '../../const';
import LoggedIn from '../logged-in/logged-in';
import LoggedOut from '../logged-out/logged-out';
import {getAuthorizationStatus} from '../../store/user-data/selectors';


function Header(): JSX.Element {
  const authorizationStatus = useSelector(getAuthorizationStatus);

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

export default Header;

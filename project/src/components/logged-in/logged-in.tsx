import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { getEmail } from '../../services/email';
import {logoutAction} from '../../store/api-actions';
import {useDispatch} from 'react-redux';


function LoggedIn():JSX.Element {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <>
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__user-name user__name">{getEmail()}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <a className="header__nav-link" href="#" onClick={
          (evt) => {
            evt.preventDefault();
            onLogout();
          }
        }
        >
          <span className="header__signout">Sign out</span>
        </a>
      </li>
    </>
  );
}

export default LoggedIn;

import {ThunkAppDispatch} from '../../types/action';
import {useRef, FormEvent} from 'react';
import {AuthData} from '../../types/auth';
import {loginAction} from '../../store/api-actions';
import {connect, ConnectedProps} from 'react-redux';
import {AppRoute, AuthorizationStatus, getRandomCity} from '../../const';
import {State} from '../../types/state';
import {changeCity} from '../../store/action';
import {useNavigate, Navigate} from 'react-router-dom';
import {CityType} from '../../types/offer';
import {getCity} from '../../store/main-data/selectors';
import {getAuthorizationStatus} from '../../store/user-data/selectors';


const mapStateToProps = (state: State) => ({
  city: getCity(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onSubmit(authData: AuthData) {
    dispatch(loginAction(authData));
  },
  onChangeCity(city: CityType) {
    dispatch(changeCity(city));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;


function Login(props: PropsFromRedux): JSX.Element {
  const {onSubmit, onChangeCity, authorizationStatus} = props;

  const randomCity = getRandomCity();
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const history = useNavigate();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (loginRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Main} />;
  }

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" ref={loginRef} required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" ref={passwordRef} required />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#" onClick={() => {
                onChangeCity(randomCity);
                history(AppRoute.Main);
              }}
              >
                <span>{randomCity}</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default connector(Login);

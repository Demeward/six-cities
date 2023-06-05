import {useRef, FormEvent} from 'react';
import {AuthData} from '../../types/auth';
import Logo from '../logo/logo';
import {loginAction} from '../../store/api-actions';
import {useAppDispatch, useAppSelector} from '../../types/action';
import {AppRoute, AuthorizationStatus, getRandomCity} from '../../const';
import {changeCity} from '../../store/action';
import {useNavigate, Navigate} from 'react-router-dom';
import {CityType} from '../../types/offer';
import {getAuthorizationStatus} from '../../store/user-data/selectors';


function Login():JSX.Element {
  const randomCity = getRandomCity();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const history = useNavigate();

  const dispatch = useAppDispatch();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const onChangeCity = (city: CityType) => {
    dispatch(changeCity(city));
  };

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
            <Logo />
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

export default Login;

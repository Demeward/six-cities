import OffersList from '../offers-list/offers-list';
import Logo from '../logo/logo';
import CitiesList from '../cities-list/cities-list';
import NoOffers from '../no-offers/no-offers';
import {State} from '../../types/state';
import {Dispatch} from '@reduxjs/toolkit';
import {Actions} from '../../types/action';
import {connect, ConnectedProps} from 'react-redux';
import {changeCity} from '../../store/action';
// import MainScreenEmpty from '../main-screen-empty/main-screen-empty';
import {filterOffers} from '../../const';

const mapStateToProps = ({city, offers}: State) => ({
  city,
  offers,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onChangeCity(city: string) {
    dispatch(changeCity(city));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function MainPage(props: PropsFromRedux): JSX.Element {

  const {city, offers, onChangeCity} = props;
  const currentOffers = filterOffers(offers, city);

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className={`page__main page__main--index ${currentOffers.length === 0 ? 'page__main--index-empty': ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList activeCity={city} onChangeCity={onChangeCity} />
          </section>
        </div>
        <div className="cities">
          {currentOffers.length !== 0
            ? <OffersList city={city} offers={currentOffers} />
            : <NoOffers city={city} />};
        </div>
      </main>
    </div>
  );
}

export default connector(MainPage);

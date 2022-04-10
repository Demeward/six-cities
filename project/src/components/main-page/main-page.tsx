import OffersList from '../offers-list/offers-list';
import Header from '../header/header';
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
      <Header />

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

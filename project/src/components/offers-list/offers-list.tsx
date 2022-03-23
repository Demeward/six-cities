import { CityType, Offer } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';
import SortingList from '../sorting-list/sorting-list';
import { useState } from 'react';
import { State } from '../../types/state';
import Map from '../map/map';
import { sortOffers } from '../../const';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';
import { Actions } from '../../types/action';
import { changeSorting } from '../../store/action';

type PropsFromRedux = ConnectedProps<typeof connector>;

const mapStateToProps = ({ activeSorting }: State) => ({
  activeSorting,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onChangeSorting(sorting: string) {
    dispatch(changeSorting(sorting));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type MainOffers = PropsFromRedux & {
  city: CityType;
  offers: Offer[];
}

function OffersList(props: MainOffers): JSX.Element {
  const { offers, city, activeSorting, onChangeSorting } = props;

  const [activeOffer, setActiveOffer] = useState<Offer | null>(null);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in {city}</b>
        <SortingList onChangeSorting={onChangeSorting} activeSorting={activeSorting} />
        <div className="cities__places-list places__list tabs__content">
          {sortOffers(offers, activeSorting).map((offer) => <OfferCard key={offer.id} offer={offer} updateState={setActiveOffer} activeOffer={activeOffer} />)}
        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map offers={offers} activeOffer={activeOffer} />
        </section>
      </div>
    </div>
  );
}

export default connector(OffersList);

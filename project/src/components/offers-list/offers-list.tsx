import { CityType, Offer } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';
import SortingList from '../sorting-list/sorting-list';
import { State } from '../../types/state';
import { sortOffers } from '../../const';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';
import { Actions } from '../../types/action';
import { changeSorting } from '../../store/action';
import {getSorting} from '../../store/main-data/selectors';

type PropsFromRedux = ConnectedProps<typeof connector>;

const mapStateToProps = (state: State) => ({
  activeSorting: getSorting(state),
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
  onActiveOfferChange: (value: Offer | null) => void;
}

function OffersList(props: MainOffers): JSX.Element {
  const { offers, city, activeSorting, onChangeSorting, onActiveOfferChange } = props;

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in {city}</b>
      <SortingList onChangeSorting={onChangeSorting} activeSorting={activeSorting} />
      <div className="cities__places-list places__list tabs__content">
        {sortOffers(offers, activeSorting).map((offer) => <OfferCard key={offer.id} offer={offer} onActiveOfferChange={onActiveOfferChange} />)}
      </div>
    </section>
  );
}

export default connector(OffersList);

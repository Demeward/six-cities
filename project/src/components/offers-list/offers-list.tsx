import { CityType, Offer } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';
import SortingList from '../sorting-list/sorting-list';
import { sortOffers } from '../../const';
import {useDispatch, useSelector} from 'react-redux';
import { changeSorting } from '../../store/action';
import {getSorting} from '../../store/main-data/selectors';
import React from 'react';


type MainOffers = {
  city: CityType;
  offers: Offer[];
  onActiveOfferChange: (value: Offer | null) => void;
}

function OffersList(props: MainOffers): JSX.Element {
  const activeSorting = useSelector(getSorting);
  const { offers, city, onActiveOfferChange } = props;
  const dispatch = useDispatch();

  const onChangeSorting = (sorting: string) => {
    dispatch(changeSorting(sorting));
  };


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

export {OffersList};
export default React.memo(OffersList,
  (prevProps, nextProps) => prevProps.offers === nextProps.offers);

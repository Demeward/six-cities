import {CityType, Offer, OfferType, SortingType} from './types/offer';

enum AppRoute {
  Login = '/login',
  Main = '/',
  Favorites = '/favorites',
  Room = '/offer/:id'
}

enum City {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

enum Sorting {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRated = 'Top rated first',
}

const filterOffers = (offers: OfferType, city: CityType) => {
  if (!offers) {
    return [];
  }

  return offers.filter((offer) => offer.city.name === city);
};

const sortOffers = (offers: OfferType, sorting: SortingType): Offer[] => {
  switch (sorting) {
    case Sorting.LowToHigh:
      return offers.slice().sort((a, b): number => a.price - b.price);
    case Sorting.HighToLow:
      return offers.slice().sort((a, b): number => b.price - a.price);
    case Sorting.TopRated:
      return offers.slice().sort((a, b): number => b.rating - a.rating);
    case Sorting.Popular:
      return offers;
    default: return offers;
  }
};

enum AuthorizationStatus {
  Auth = 'AUTH',
  NotAuth = 'NOT_AUTH'
}

export {AppRoute, AuthorizationStatus, City, Sorting, filterOffers, sortOffers};

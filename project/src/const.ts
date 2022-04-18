import { CityType, Offer, OfferType, ServerOffer, ServerComment, Comment, SortingType } from './types/offer';
import { UserData, UserServerData } from './types/auth';

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

const Rating = {
  'perfect': 5,
  'good': 4,
  'not bad': 3,
  'badly': 2,
  'terribly': 1,
};

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

const toClientOffers = (offers: ServerOffer[]): Offer[] => {
  const adaptedOffers: Offer[] = [];
  offers.map((offer) => adaptedOffers.push(toClientOffer(offer)));

  return adaptedOffers;
};

const toClientOffer = (offer: ServerOffer): Offer => {
  const adaptedOffer = Object.assign(
    {},
    offer,
    {
      host: {
        avatarUrl: offer['host']['avatar_url'],
        id: offer['host']['id'],
        isPro: offer['host']['is_pro'],
        name: offer['host']['name'],
      },
      isFavorite: offer['is_favorite'],
      isPremium: offer['is_premium'],
      maxAdults: offer['max_adults'],
      previewImage: offer['preview_image'],
    },
  );

  delete adaptedOffer['host']['avatar_url'];
  delete adaptedOffer['host']['is_pro'];
  delete adaptedOffer['is_favorite'];
  delete adaptedOffer['is_premium'];
  delete adaptedOffer['max_adults'];
  delete adaptedOffer['preview_image'];

  return adaptedOffer as Offer;
};

const toClientAuthInfo = (authInfo: UserServerData): UserData => {
  const adaptedInfo = Object.assign(
    {},
    authInfo,
    {
      avatarUrl: authInfo['avatar_url'],
      isPro: authInfo['is_pro'],
    },
  );
  delete adaptedInfo['avatar_url'];
  delete adaptedInfo['is_pro'];

  return adaptedInfo;
};

const toClientReviews = (reviewsList: ServerComment[]): Comment[] => {
  const adaptedReviews: Comment[] = [];
  reviewsList.map((review) => {
    const adaptedReview = Object.assign(
      {},
      review,
      {
        user: {
          avatarUrl: review['user']['avatar_url'],
          id: review['user']['id'],
          isPro: review['user']['is_pro'],
          name: review['user']['name'],
        },
      },
    );
    delete adaptedReview['user']['avatar_url'];
    delete adaptedReview['user']['is_pro'];

    adaptedReviews.push(adaptedReview as Comment);
  });

  return adaptedReviews;
};

const getRandomCity = (): CityType => {
  const cities = Object.values(City);
  const randomInt = Math.floor(Math.random() * cities.length);
  return cities[randomInt];
};

enum AuthorizationStatus {
  Auth = 'AUTH',
  NotAuth = 'NOT_AUTH',
  Unknown = 'UNKNOWN',
}

enum APIRoute {
  Offers = '/hotels',
  Room = '/hotel',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Favorite = '/favorite',
}

export { AppRoute, AuthorizationStatus, City, Rating, Sorting, APIRoute, filterOffers, sortOffers, toClientOffers, toClientOffer, toClientAuthInfo, toClientReviews, getRandomCity };

import {Offer} from '../types/offer';

const AVATAR_URL = 'https://i.pravatar.cc/128';

const offers: Offer[] = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      isPro: true,
      name: 'Angelina',
    },
    id: 1,
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg'],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
  },
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: `Wander around the historic streets while the city sleeps,
    then head back for a morning coffee at this urban-chic studio with a suspended loft bedroom.`,
    goods: ['Heating', 'Kitchen', 'Cable TV'],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 56,
      isPro: false,
      name: 'Anna',
    },
    id: 5,
    images: ['img/apartment-03.jpg', 'img/room.jpg'],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-02.jpg',
    price: 160,
    rating: 4.5,
    title: 'Luxury City Center Loft on a Traffic-Free Street',
    type: 'apartment',
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'Enjoy the elegance of a by-gone era while staying in this Art Deco home.',
    goods: ['Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 35,
      isPro: true,
      name: 'Harry',
    },
    id: 8,
    images: ['img/apartment-02.jpg', 'img/apartment-03.jpg'],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 10,
    },
    maxAdults: 3,
    previewImage: 'img/apartment-03.jpg',
    price: 200,
    rating: 4.8,
    title: 'Elegant Art Deco Home with Garden',
    type: 'house',
  },
  {
    bedrooms: 5,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: `The house is located in the enclave of Llandudno Beach,
    a locals-only spot with unspoilt, fine white sand and curling surfing waves.
    Although shops and restaurants are only a five-minute drive away,
    the area feels peaceful and secluded.`,
    goods: ['Heating', 'Kitchen', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 15,
      isPro: true,
      name: 'Tom',
    },
    id: 10,
    images: ['img/apartment-01.jpg', 'img/room.jpg'],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 10,
    },
    maxAdults: 4,
    previewImage: 'img/room.jpg',
    price: 300,
    rating: 4.9,
    title: 'Forest-and-Heaven Themed Hotel',
    type: 'hotel',
  },
];

export default offers;

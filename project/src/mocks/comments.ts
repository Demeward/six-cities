import {Comment} from '../types/offer';

const AVATAR_URL = 'https://i.pravatar.cc/128';

export const comments: Comment[] = [
  {
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.
            The building is green and from 18th century.`,
    date: '2019-05-08T14:13:56.569Z',
    id: 1,
    rating: 4.6,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 56,
      isPro: false,
      name: 'Anna',
    },
  },
  {
    comment: `Wander around the historic streets while the city sleeps,
    then head back for a morning coffee at this urban-chic studio with a suspended loft bedroom.`,
    date: '2020-05-10T18:40:56.569Z',
    id: 5,
    rating: 4.9,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      isPro: true,
      name: 'Sara',
    },
  },
  {
    comment: `The house is located in the enclave of Llandudno Beach,
    a locals-only spot with unspoilt, fine white sand and curling surfing waves.`,
    date: '2020-05-10T18:40:56.569Z',
    id: 8,
    rating: 3.5,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 35,
      isPro: true,
      name: 'Harry',
    },
  },
  {
    comment: `Although shops and restaurants are only a five-minute drive away,
    the area feels peaceful and secluded.`,
    date: '2020-05-10T18:40:56.569Z',
    id: 10,
    rating: 4,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 15,
      isPro: true,
      name: 'Tom',
    },
  },
];

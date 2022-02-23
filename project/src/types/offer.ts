export type Offer = {
  bedrooms: number,
  city: {
    location: Location,
    name: string,
  },
  description: string,
  goods: string[],
  host: PropertyHost,
  id: number,
  images: string[],
  isFavorite: boolean,
  isPremium: boolean,
  location: Location,
  maxAdults: number,
  previewImage: string,
  price: number,
  rating: number,
  title: string,
  type: string
}

export type Location = {
  latitude: number,
  longitude: number,
  zoom: number
}

export type PropertyHost = {
  avatarUrl: string,
  id: number,
  isPro: boolean,
  name: string
}

export type OfferType = {
  offer: Offer | undefined;
 }

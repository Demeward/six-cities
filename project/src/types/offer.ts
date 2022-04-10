export type Offer = {
  bedrooms: number,
  city: {
    location: Location,
    name: string,
  },
  description: string,
  goods: string[],
  host: User,
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

export type ServerOffer = {
  bedrooms: number,
  city: {
    location: Location,
    name: string,
  },
  description: string,
  goods: string[],
  host: ServerUser,
  id: number,
  images: string[],
  is_favorite?: boolean,
  is_premium?: boolean,
  location: Location,
  max_adults?: number,
  preview_image?: string,
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

export type User = {
  avatarUrl: string,
  id: number,
  isPro: boolean,
  name: string
}

export type ServerUser = {
  avatar_url?: string,
  id?: number,
  is_pro?: boolean,
  name?: string
}

export type OfferType = Offer[] | [];

export type PropertyOffer = Offer | null;

export type OffersMapType = OfferType | PropertyOffer;

export type CommentsType = Comment[] | [];

export type CityType = string;

export type SortingType = string;

export type Comment = {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: User,
}

export type ServerComment = {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: ServerUser,
}

export type CommentPost = {
  comment: string,
  rating: number,
  id?: number,
}

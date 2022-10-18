export interface Movie {
  id: number
  title: string
  description: string
  producer: string
  rating: number
  image: string
  movie_seansy: Seans[]
}


export interface Seans {
  id: number
  price: number
  time: string
  language: string
  kinozal_id: number
  seans_seats: SeansSeat[]
}


export interface Kinozal {
  id: number
  seat_quantity: number
  kinozal_details: KinozalDetails[]
}

export interface KinozalDetails {
  id: number
  seat_numeration: number
  available: boolean
}


export interface SeansSeat {
    id: number,
    seat_number: number,
    available: boolean,
    seans: number
}

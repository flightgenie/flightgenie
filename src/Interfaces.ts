export interface destination {
  location: string;
  numDays: number;
}

export interface form {
  origin: string;
  roundTrip: boolean;
  departureTime: number;
  numAdults: number;
  flightClass: string;
  directFlights: boolean;
  destinations: destination[];
}

export interface route {
  fromAirport: string;
  toAirport: string;
  departureTime: number;
  returnTime: number;
  airline: string;
  flightNumber: number;
}

export interface flight {
  fromAirport: string;
  toAirport: string;
  departureTime: number;
  arriveTime: number;
  price: number;
  routes: route[];
  deep_link: string;
}

export interface trip {
  destinations: destination[];
  departureTime: number;
  totalPrice: number;
  numAdults: number;
  flightClass: string;
  flights: flight[];
}

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
  arrivalTime: number;
  airline: string;
  flightNumber: number;
}

export interface flight {
  fromAirport: string;
  toAirport: string;
  departureTime: number;
  arrivalTime: number;
  price: number;
  deepLink: string;
  routes: route[];
}

export interface trip {
  userId: number;
  origin: string;
  roundTrip: boolean;
  departureTime: number;
  arrivalTime: number; // the time the LAST flight arrives
  numAdults: number;
  flightClass: string;
  directFlights: boolean;
  totalPrice: number;
  destinations: destination[];
  flights: flight[];
}

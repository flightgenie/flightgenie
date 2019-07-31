export interface destination {
  location: string;
  numDays: number;
}

export interface form {
  userId: string;
  origin: string;
  roundTrip: boolean;
  departureDate: any;
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
  userId: string;
  origin: string;
  roundTrip: boolean;
  numAdults: number;
  flightClass: string;
  directFlights: boolean;
  destinations: destination[];
  totalPrice: number;
  flights: flight[];
}

export interface destination {
  location: string;
  numDays: number;
}

export interface form {
  origin: string;
  roundTrip: boolean;
  departureTime: string;
  numAdults: number;
  flightClass: string;
  directFlights: boolean;
  destinations: destination[];
}

export interface layoverLocation {
  from: string;
  to: string;
  depart: string;
  arrive: string;
  carrier: string;
  flight_id: number;
}

export interface trip {
  from: string;
  to: string;
  depart: string;
  arrive: string;
  carrier: string;
  flight_id: number;
  cost: number;
  numAdults: number;
  flightClass: string;
  layovers: layoverLocation[];
}

const {
  GraphQLID,
  GraphQLString,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} = require('graphql');

const DestinationType = new GraphQLObjectType({
  name: 'Destination',
  fields: {
    fromAirport: { type: GraphQLString, required: true },
    toAirport: { type: GraphQLString, required: true },
    numDays: { type: GraphQLInt, required: true },
    departureTime: { type: GraphQLInt, required: true },
    arrivalTime: { type: GraphQLInt, required: true },
    airline: { type: GraphQLString, required: true },
    flightNumber: { type: GraphQLInt, required: true }
  }
});
const RouteType = new GraphQLObjectType({
  name: 'Route',
  fields: {
    location: { type: GraphQLString, required: true },
    numDays: { type: GraphQLInt, required: true }
  }
});
const FlightType = new GraphQLObjectType({
  name: 'Flight',
  fields: {
    location: { type: GraphQLString, required: true },
    numDays: { type: GraphQLInt, required: true }
  }
});

export const TripType = new GraphQLObjectType({
  name: 'Trip',
  fields: {
    id: { type: GraphQLID },
    departureTime: { type: GraphQLInt, required: true },
    totalPrice: { type: GraphQLInt, required: true },
    numAdults: { type: GraphQLInt, required: true },
    flightClass: { type: GraphQLString, required: true },
    destinations: { type: new GraphQLList(DestinationType) },
    flights: { type: new GraphQLList(FlightType) }
  }
});

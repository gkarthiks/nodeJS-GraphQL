import { makeExecutableSchema } from 'graphql-tools/dist/index';
import resolvers from './resolvers';

const typeDefs = `
  type Movie {
    id: Int!
    title: String
    actors: [Actor] # the list of Posts by this author
  }

  type Actor {
    id: Int!
    firstName: String
    lastName: String
    movies: [Movie]
  }

  # the schema allows the following query:
  type Query {
    getActorList: [Actor]
    getActor(id: Int!): Actor
    getMovieList: [Movie]
    getMovie(search: MovieSearchInput): Movie
  }

  # this schema allows the following mutation:
  type Mutation {
    addActor (
      id: Int!
      firstName: String
      lastName: String
    ): Actor
  }
  
  input MovieSearchInput {
    id: Int
    title: String
  }
`;

const schemas = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schemas;

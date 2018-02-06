'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('graphql-tools/dist/index');

var _resolvers = require('./resolvers');

var _resolvers2 = _interopRequireDefault(_resolvers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var typeDefs = '\n  type Movie {\n    id: Int!\n    title: String\n    actors: [Actor] # the list of Posts by this author\n  }\n\n  type Actor {\n    id: Int!\n    firstName: String\n    lastName: String\n    movies: [Movie]\n  }\n\n  # the schema allows the following query:\n  type Query {\n    getActorList: [Actor]\n    getActor(id: Int!): Actor\n    getMovieList: [Movie]\n    getMovie(search: MovieSearchInput): Movie\n  }\n\n  # this schema allows the following mutation:\n  type Mutation {\n    addActor (\n      id: Int!\n      firstName: String\n      lastName: String\n    ): Actor\n  }\n  \n  input MovieSearchInput {\n    id: Int\n    title: String\n  }\n';

var schemas = (0, _index.makeExecutableSchema)({
  typeDefs: typeDefs,
  resolvers: _resolvers2.default
});

exports.default = schemas;
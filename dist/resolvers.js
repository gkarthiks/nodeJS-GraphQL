'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _dummyData = require('../assets/dummy-data');

var _HelperFile = require('./HelperFile');

var resolvers = {
  Query: {
    getActorList: function getActorList() {
      return (0, _lodash.uniqBy)(_dummyData.actors, 'id');
    },
    getMovieList: function getMovieList() {
      return (0, _lodash.uniqBy)(_dummyData.movies, 'id');
    },
    getActor: function getActor(_, _ref) {
      var id = _ref.id;
      return (0, _lodash.find)(_dummyData.actors, { id: id });
    },
    getMovie: function getMovie(root, _ref2) {
      var search = _ref2.search;
      return (0, _HelperFile.getMovie)(search.id, search.title);
    }
  },
  Mutation: {
    addActor: function addActor(_, _ref3) {
      var id = _ref3.id,
          firstName = _ref3.firstName,
          lastName = _ref3.lastName;
      return (0, _HelperFile.addActor)(id, firstName, lastName);
    }
  },
  Movie: {
    actors: function actors(movie) {
      return (0, _HelperFile.associateActorArray)(movie);
    }
  },
  Actor: {
    movies: function movies(actor) {
      return (0, _lodash.filter)(_dummyData.movies, { actorId: actor.id });
    }
  }
};

exports.default = resolvers;
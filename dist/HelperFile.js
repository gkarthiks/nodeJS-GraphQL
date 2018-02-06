'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMovie = exports.associateActorArray = exports.addActor = undefined;

var _lodash = require('lodash');

var _dummyData = require('../assets/dummy-data');

var addActor = exports.addActor = function addActor(id, firstName, lastName) {
  var existingID = (0, _lodash.find)(_dummyData.actors, { id: id });
  if (existingID !== null && existingID !== undefined) {
    throw new Error('ID Already exists');
  }
  var existingActor = (0, _lodash.find)(_dummyData.actors, { firstName: firstName, lastName: lastName });
  if (existingActor !== null && existingActor !== undefined) {
    throw new Error('Actory already added.');
  }
  var actor = {
    id: id,
    firstName: firstName,
    lastName: lastName
  };
  _dummyData.actors.push(actor);
  return actor;
};

var associateActorArray = exports.associateActorArray = function associateActorArray(movie) {
  var actorsCol = [];
  _dummyData.movies.forEach(function (movieObj) {
    if (movieObj.id === movie.id) {
      actorsCol.push((0, _lodash.find)(_dummyData.actors, { id: movieObj.actorId }));
    }
  });
  return actorsCol;
};

var getMovie = exports.getMovie = function getMovie(id, title) {
  return (0, _lodash.find)((0, _lodash.uniqBy)(_dummyData.movies, 'id'), { id: id, title: title });
};
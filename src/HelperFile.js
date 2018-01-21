import { find, uniqBy } from 'lodash';
import { actors, movies } from '../assets/dummy-data';

export const addActor = (id, firstName, lastName) => {
  const existingID = find(actors, { id });
  if (existingID !== null && existingID !== undefined) {
    throw new Error('ID Already exists');
  }
  const existingActor = find(actors, { firstName, lastName });
  if (existingActor !== null && existingActor !== undefined) {
    throw new Error('Actory already added.');
  }
  const actor = {
    id,
    firstName,
    lastName,
  };
  actors.push(actor);
  return actor;
};

export const associateActorArray = (movie) => {
  const actorsCol = [];
  movies.forEach((movieObj) => {
    if (movieObj.id === movie.id) {
      actorsCol.push(find(actors, { id: movieObj.actorId }));
    }
  });
  return actorsCol;
};

export const getMovie = (id, title) => find(uniqBy(movies, 'id'), { id, title });

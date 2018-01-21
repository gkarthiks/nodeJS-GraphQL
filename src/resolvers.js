import { filter, find, uniqBy } from 'lodash';
import { actors, movies } from '../assets/dummy-data';
import { getMovie, addActor, associateActorArray } from './HelperFile';

const resolvers = {
  Query: {
    getActorList: () => uniqBy(actors, 'id'),
    getMovieList: () => uniqBy(movies, 'id'),
    getActor: (_, { id }) => find(actors, { id }),
    getMovie: (root, { search }) => getMovie(search.id, search.title),
  },
  Mutation: {
    addActor: (_, { id, firstName, lastName }) => addActor(id, firstName, lastName),
  },
  Movie: {
    actors: movie => associateActorArray(movie),
  },
  Actor: {
    movies: actor => filter(movies, { actorId: actor.id }),
  },
};

export default resolvers;

let actors = [
    { id:1, firstName:'Tom', lastName:'Cruise' },
    { id:2, firstName:' Gerard', lastName:'Butler' },
    { id:3, firstName:' Jordan', lastName:'Bridges' },
    { id:4, firstName:' Pablo', lastName:'Schreiber' },
    { id:5, firstName:' Patrick', lastName:'Wilson' },
];

const movies = [
    { id:1, title:'The Phantom of the Opera', actorId:2 },
    { id:1, title:'The Phantom of the Opera', actorId:5 },
    { id:2, title:'Frequency', actorId:3 },
    { id:3, title:'13 Hours', actorId:4 },
    { id:4, title:'Bubble Boy', actorId:4 },
    { id:5, title:'Den of Thieves', actorId:4 },
    { id:5, title:'Den of Thieves', actorId:3 },
    { id:5, title:'Den of Thieves', actorId:2 },

];

module.exports = {
    actors: actors,
    movies: movies
}
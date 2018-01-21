import express from 'express';
import httpGraphql from 'express-graphql';
import resolvers from './src/resolvers';
import schemas from './src/schema';

let app = express();
app.use('/', httpGraphql({
    schema: schemas,
    rootValue: resolvers,
    graphiql: true,
}));

app.listen(8080);
console.log('Running a GraphQL API server at localhost:8080/graphql');
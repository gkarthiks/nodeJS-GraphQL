import express from 'express';
import httpGraphql from 'express-graphql';
import resolvers from './resolvers';
import schemas from './schema';

let app = express();
app.use('/', httpGraphql({
    schema: schemas,
    rootValue: resolvers,
    graphiql: true,
}));

app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
console.log(` Try something like the below query

                query{
                  getActorList{
                    firstName
                    lastName
                  }
                }
`);

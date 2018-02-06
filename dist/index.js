'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _resolvers = require('./resolvers');

var _resolvers2 = _interopRequireDefault(_resolvers);

var _schema = require('./schema');

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use('/', (0, _expressGraphql2.default)({
  schema: _schema2.default,
  rootValue: _resolvers2.default,
  graphiql: true
}));

app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
console.log(' Try something like the below query\n\n                query{\n                  getActorList{\n                    firstName\n                    lastName\n                  }\n                }\n');
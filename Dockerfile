FROM node:slim
COPY ../nodeJS-GraphQL .
EXPOSE 4000
CMD ["sh", "-c", "npm install && npm run-script build && npm run-script run"]
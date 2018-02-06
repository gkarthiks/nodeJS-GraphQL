### Sample Node JS application with GraphQL
This is a sample `GraphQL` implementation over the `NodeJS` `express` server listening on port 4000.

The data for this server if feed by the hardcoded file [in here](https://github.com/gkarthiks/nodeJS-GraphQL/blob/master/assets/dummy-data.js). This data is used for only reading i.e., only by the `query` type.

Via `mutation`, whatever data is sent to the server; all of those are stored in the server session and returned to the `query` while upon *reading*.

#### Requirements
* [node](https://docs.npmjs.com/getting-started/installing-node)
* [npm](https://www.npmjs.com/get-npm)
* [docker](https://www.docker.com/) (for containerizing the app)
* [docker registry account](https://hub.docker.com/)
* [k8s](https://kubernetes.io/) [minikube](https://kubernetes.io/docs/getting-started-guides/minikube/) (for deploying the container into cluster)
* [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) (to interact with the Kubernetes)

#### Install & Run in k8s
Follow the below steps to download and run the application in minikube.

Download the source code

> git clone https://github.com/gkarthiks/nodeJS-GraphQL.git

Build the source code and run it locally for testing.

>
```
  cd nodeJS-GraphQL
  npm run-script build
  npm run-script run
```

The above steps will run the `nodeJS` application listening on port 4000. try hitting `localhost:4000/graphql`

Noe create a `docker image` by executing the below command.

>
```
docker build -t graphqlexample .
```

This will create a docker image with `node:slim` as base. Check whether the image is created or not by listing the docker images via below command.

> docker image ls

Tag the docker image with the following command and push it to your docker hub.

>
```
docker tag graphqlexample <username>/graphqlexample
docker push <username>/graphqlexample
```
  
Find quick docker commands [here](https://github.com/gkarthiks/quick-commands-cheat-sheet).

Now that docker image is created, that can be tested with docker itself by runing it locally with the below command.

> docker run -p 4000:4000 <username>/graphqlexample
  
Once after successfull testing, it can be deployed in the `minikube` by creating the `Deployment`, `Service` and `Route` objects.

# graphqllearn

https://github.com/StephenGrider/GraphQLCasts

Steps:
=====

1. Create a Dockerfile and run the build the image.
2. Using the content in Dockerfile, run the below command, for creating the image.

    docker build -f ./Dockerfile -t graphqlexpress:0.1 .

There were issues of running command inside docker file. This is due to the version of node 16 which has /root to install
packages. To avoid this error, use WORKDIR /<folder> for running any commands inside the container image.

3. Setup for installation and Docker file is in ```setup``` branch.

4. If you get Error message as below,

Ref: https://stackoverflow.com/questions/65517979/expressgraphql-is-not-a-function

TypeError: expressGraphQL is not a function

then, replace the require statement of server.js as below,

require('express-graphql').graphqlHTTP;

5. Navigate to http://localhost:3500/graphql

and will get error message as below,

{"errors":[{"message":"GraphQL middleware options must contain a schema."}]}

It says ,we need to provide a valid schema.

6. For creating valid schema, create a folder ```schema``` and inside which creates ```schema.js``` file.

copy the below content create schema for each Object.

const graphql = require('graphql');

const { GraphQLObjectType } = graphql; 

Refer UserType object for Schema creation.


7. What is Root query ? To jump in the GraphQL. or it is the entry point for data.

8. Export the Root Query, defining the schema.

JSON-SERVER:

1. to mock up Outside API request, use json-server npm. (This is nothing but to nimick Asynchronous API request.)



=================

Issues Faced:

json-server issues,

without --host 0.0.0.0 in package.json "script" section, the server was not running.

And also, when invoking used "npx",

npx json-server



Docker Communication:


Communicating from 1 container to another container by creating a network or connecting to the default network.

1. With the network created by default (root foldername_default), run the below command. 

    docker network connect <network-name> <container-name>

2. Listing the network available in host m/c

    docker network ls

3. Inspecting the docker network.

    docker network inspect <network-name>

4. Under Containers: {} section, now we see the 2 containers added.

5. Instead of using localhost:<port> for communicating, use <container_name>:<port_no> inside the container file.


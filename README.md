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

9. 


=================

Issues Faced:

json-server issues,

without --host 0.0.0.0 in package.json "script" section, the server was not running.
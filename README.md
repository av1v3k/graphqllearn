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

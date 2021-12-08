# distributed-movie-rating-system

This project was done for learning purposes. microservices, an advanced architecture where many patterns and technologies could be implemented for each purpose. this kind of architectures might be complex to realise at first but in the other hand it offers numerous advantages.

The application is not complete but it will be updated continuously

### technologies
we used reactjs for our client side application, nginx as an api-gateway (for now it only works as a reverse proxy and a load balancer). for our two microservices the first one is a simple flask application and the second one is built with django both of them use an RDBM database, mysql. they also both use rabbitmq as a messaging service. rabbitmq will not be installed for this purpose as we used their cloud service.


### architeture
*will be provided soon*

### usage guide
a lot of technologies where used to build this application, should i worry about the installation ? which version is required for each technologie to run this application.

absoluetly not, all you need is to have docker installed, an internet connection and we are ready to go.
go to the root directory for each microservice (and also the client application) then run
```
docker-compose up --build
```
### license
this project is licensed under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)

### faq
Q) what advantages it offers ?
A) a lot, primarly scalability and availability

#### ideas are needed
contributing to this project will be highly appreciated.
currently working on authentication, i got some ideas but due to restrictions (the use of a the free nginx service as long as there exists the paid option) and limited resources i don't know if i can go far.

### credit
a huge thank for freecodecamp.org for keeping spreading knowledge all over the world for free.

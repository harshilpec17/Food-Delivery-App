## What is Microservice ?

- Microservices architecture refers and allow to large application to be separated into smaller independent parts,with each part having its own realm of responsibility.To serve one single request, a microservice can make so many internal calls to different ports to complete a whole request.

- Microservice architecture has several benefits

1. `Scalability` ->>> Microservices are working independently, It is very easy to add scale or update any feature without disturbing any other microservice in the system.

- If a particular service experiences more demand, we can scale the service, and when it has lower demand we can roll back a service without taking down whole application !!

2. `Failure safety` ->>> If a bug detect in a application, more likely it will not disturb any other microservices. on the other hand, If there are failure in Monolithic architecture, it will collapse all other services.

- the main benefits of it as it will prevent the cascading failures of an application

3. `Program language independency` ->>> It can be deployed, maintain, scale and update in any programming language, developer can choose the the best language and build a feature deploy as a independent service

- it can connect to the any service which is available to the internet-connected service. it call and make a interaction with it.

4.  `Simpler to deploy and use` ->>> one feature can develop stand alone and also we can deploy the feature across the site.

- `Payment Gateway` or `Register` can be used at different places without redesign whole application.

5. `Data security` ->>> When application system architecture break down into smaller chunks, It is very easy to safe guard some of the APIs and sensitive information at low cost.

- If business require some of the data stored under some guideline,It is very easy to maintain that.

6. `Team Optimization and Flexibility` ->>> Smaller team tend to work efficiently rather than bigger organization. It will easier to manage and also it will have greater focus to build new feature of the Microservices

- When Company need to hire a new talent, It would be so much easier to pool the talent in the market. It doesn't require a too much prerequisites.
- Company can secure the core data and architecture to themselves and collaborate with the other third party services without reliving too much sensitive information.

# Disadvantages

Every technology has the two side of it. It is very important to know about it before fall into love of it.

`Initially Hard to Adopt` ->>> It will save the cost in a long run. but, Initially it is costly operation to have hoisting environment as well the security and maintenance.

- Company need to have a skilled team which can handle all the protocol of the services. It is very easy to get into costly operation rather than productive and cheaper operation

`APIs handling and debugging complexity` ->>> When every service is connected with thousand of APIs. If there are changes in the API, It is very important to have that changes to other services or adaptation to a new changes.It is very critical to maintain pattern of APIs

- Once, developer hit to a bug, It is very high chances to have a bug from other microservices. It requires a high skills to trace the problem in the code.

# Conclusion

-It works on agile methodology. Microservices are widely used approach for developing features, maintain, perform specific function and cloud-native approach for development.

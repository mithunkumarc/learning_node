
### Types of Authentication

#### 1. JWT based authentication


#### 2. session based authentication

        for authentication we can use third party like google, facebook, github, etc

#### session based authentication steps: read Auth Server and Resource Server as same third party(google, facebook, github...)

1. user sends credentials to Auth server third party first

    User ---credentials---> Auth Server

2. Auth server sends access token if credentials valid

    Auth Server ----access token----> User

3. User sends access token to My Application 

    User ---access token----> My Application

4. My Application sends access token,verify with Resource server of third party

    My Application --- checks access token valid----> Resource Server
    
5. Resource Server reply valid or not to myapp

    Resource Server --- valid or not ---> My Application

6. my app grants permission depend on access token valid or not

    MyApplication ---- grants persmission/ blocks----> User
    
#### More Info Auth2


OAuth 2 is an authorization framework that allows third-party applications to obtain limited access to HTTP services, 
either on behalf of the resource owner or by allowing these third-party applications to obtain access on their own behalfs. 
In either case, the owner does not have to provide their login credentials directly to the application.

IF we are building third party application. Eg: Facebook

        Facebook would be our HTTP service and the end user will be the resource owner. 
        These three fall under the following OAuth roles:

#### Resource Owner/ End user - 

This is the user authorizing a third-party application to access certain protected resources from a resource server.

#### Client - 
This is the third party application making protected resource requests to a resource server on behalf of the resource owner.

#### Resource Server - 
Hosts the protected resources e.g user profile.

#### Authorization Server - 

Responsible for authenticating the resource owner and providing access token to clients.  

In order for successful user authentication to happen, a series of steps need to be followed:

        The client, (which is our application in this case), requests authorization from the end-user.
        Once the end-user authorizes the client, an application grant is issued.
        Our client then requests an access token from the authorization server using the authorization grant.
        The authorization server validates the grant and authenticates the client. 
        If the two processes are successful an access token is granted to the client.
        Our client then uses the access token to request the protected resource.
        The resources server then validates the access token and if successful, 
        the requested protected resources are shared with the client.

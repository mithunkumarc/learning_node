
#### jwt token/access token : 

using this, user is authorized to access pages/resources

#### refresh token: 
Because access token has expire date, refreshtoken gives oppertunity to be in session by generating new access token.   
middleware might check every req that access token expired or not, if yes create new access token with help of refresh token.  
Best practice regarding where to store on client side not discussed in this example.  

access token has 10 - 15min expiry time  
refresh token can last for months.  

when access token is expired , generate new access token with help of refresh token.  
when refreshtoken also expired then user has to login again.   


#### use standard encryption while creating json webtokens
  
    in this example "accesstoken" , "refreshtoken" strings used as encryption. not a best practice.

### steps to test this example

### 1. generate access token and refresh token 

      http://localhost:3000/login
      payload: 
      {
              "username": "john",
              "password": "password123admin"
      }
      response you get is accesstoken and refreshtoken

### 2. test expiry of jsonweb token, after generating access token wait for time to elapse

      eg : if access token expiresIn is 1m , send below req after 1 minute. 
      http://localhost:3000/verify
      payload: 
      {
              "token": "eyJhbGciO....your access token"
      }
      response : Token expired error

### 3. generate new access token with the help of refresh token.

        http://localhost:3000/token
        {
                "token": "eyJhbGciOiJI....your refresh token to be sent here"
        }
        response: new access token

### 4. logout functionality

        delete access token from client side
        refresh token is stored on serverside(may be it uses database), remove from server side.
        removing refresh token from server side is important this is used to create new access token.
        steps: 
        1. login first: copy refresh token 
        2. http://localhost:3000/logout
        payload: 
        {
                "token": "eyJhbGciOiJIUz...send refresh token here"
        }

### 5. verify logout

        after logout , try to generate new access token using refresh token, you will get error 
        repeat
        1. /logout 
        2. /token with refresh token: response : JsonWebTokenError: invalid signature

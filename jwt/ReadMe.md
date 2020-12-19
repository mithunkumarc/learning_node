### this example target backend management of jwt. uses express.

#### example based on 

https://stackabuse.com/authentication-and-authorization-with-jwts-in-express-js/

#### check jwt expired or not

    a middleware would be usefull to check whether jwt expired or not, if expired redirect link to refresh token
    
    jwt.verify(token, 'shhhhh', function(err, decoded) {
                      if (err) {
                        /*
                          err = {
                            name: 'TokenExpiredError',
                            message: 'jwt expired',
                            expiredAt: 1408621000
                          }
                        */
                      }
                });

https://stackoverflow.com/questions/34329280/node-js-express-js-jwt-how-to-check-token-expired-or-not

#### how to refresh jwt

    middleware could help it is expired or not, if yes redirect refresh token 

https://stackoverflow.com/questions/45990451/how-to-silently-refresh-expired-jwt-token-with-oauth2

#### logout

        remove refreshtoken from server side memory  
        remove accesstoken from local memory from client sid

https://stackoverflow.com/questions/37959945/how-to-destroy-jwt-tokens-on-logout

some shortcuts used in jwt

    iat : timestamp at which token is issued
    eat/exp : expirtation of token
    sub: id of user

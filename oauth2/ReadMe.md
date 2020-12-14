#### for authentication we can use third party like google, facebook, github, etc

#### steps: read Auth Server and Resource Server as same third party(google, facebook, github...)

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

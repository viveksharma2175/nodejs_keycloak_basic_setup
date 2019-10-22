Run “docker-compose up” from the location of the docker-compose.yaml file to start the nodejs service along with keycloak service.
You will get a message “Keycloak 7.0.0 (WildFly Core 9.0.2.Final) started in xxxxxxms” which means the servers are up.
Access keycloak from http://localhost:8080 with username “admin” and password “pass”
Follow the below steps to setup keycloak.
1. Create Realm
![alt text](https://raw.githubusercontent.com/viveksharma2175/nodejs_keycloak_basic_setup/master/images/realm.png)

2. Create Client
![alt text](https://raw.githubusercontent.com/viveksharma2175/nodejs_keycloak_basic_setup/master/images/client.png)

In Clients, go to installation and select “Keycloak OIDC JSON” then copy the json and paste it in “keycloak.json” file in nodejs source directory.

![alt text](https://raw.githubusercontent.com/viveksharma2175/nodejs_keycloak_basic_setup/master/images/client_install.png)

3. Create user 
![alt text](https://raw.githubusercontent.com/viveksharma2175/nodejs_keycloak_basic_setup/master/images/user.png)

Once the user is created, go to “Credentials” and add the password and the click on “Reset Password”
![alt text](https://raw.githubusercontent.com/viveksharma2175/nodejs_keycloak_basic_setup/master/images/user_2.png)

Once this setup is complete, go to a web browser and type http:localhost:3000

![alt text](https://raw.githubusercontent.com/viveksharma2175/nodejs_keycloak_basic_setup/master/images/index_page.png)

Click on Login and add the user details added in keycloak setup.
NOTE: You will not be able to access the Members page without login too
![alt text](https://raw.githubusercontent.com/viveksharma2175/nodejs_keycloak_basic_setup/master/images/login.png)

You will be able to see the token received from keycloak in results.
Now, if you try to access the Members page, you will be allowed and you can see the token details in results.

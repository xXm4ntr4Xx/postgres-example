# postgres-example

example

The exercise consist on create a react application connecting frontend(React) and backend(postgres) using the psql shell command and pg admin 4.


1. First we created the file structure folder (client and server)

<img width="242" alt="Screenshot 2022-04-02 at 21 49 09" src="https://user-images.githubusercontent.com/74420607/161400732-aa50e710-dde9-4f7a-a1e3-9f502f363e66.png">

2.We coing to use connection pool to connect to postgres so we install pkg dependency and  dotenv file to start the connection.

<img width="219" alt="Screenshot 2022-04-02 at 21 52 54" src="https://user-images.githubusercontent.com/74420607/161400839-ce67858b-3dc4-4a95-b419-cf4e5dd05b09.png">

3.we deconstruct the Pool and we assign the function express.router() to a variable router

<img width="240" alt="Screenshot 2022-04-02 at 21 54 35" src="https://user-images.githubusercontent.com/74420607/161400898-25ea7e74-935c-4da3-ae43-6a740592b697.png">

4.we can assign the database info to a variable and use the process.env for every database info this will take the parameters from the .env file we created on local enviroment

<img width="292" alt="Screenshot 2022-04-02 at 21 56 20" src="https://user-images.githubusercontent.com/74420607/161400961-742ee9c7-a009-437a-bb6d-0ff8d4903655.png">

5.as follow we got an example of a GET,POST and DELETE request

<img width="703" alt="Screenshot 2022-04-02 at 21 58 30" src="https://user-images.githubusercontent.com/74420607/161401022-7e209697-3352-4b6c-a71b-c339cce5623d.png">

6.On the front end we have a function the call all the data from the backend using the useEffect with an empty dependecy

<img width="343" alt="Screenshot 2022-04-02 at 22 00 57" src="https://user-images.githubusercontent.com/74420607/161401086-566c940e-4b48-494a-a681-451bb7e0dce3.png">

<img width="281" alt="Screenshot 2022-04-02 at 22 01 14" src="https://user-images.githubusercontent.com/74420607/161401096-e6b170a4-2dda-4b18-9fc4-63514dc029e0.png">

7.And a post data function that send a post request to the URL on the backend,set the call function inside a function called submitOption where we call the function inside

<img width="411" alt="Screenshot 2022-04-02 at 22 04 25" src="https://user-images.githubusercontent.com/74420607/161401165-90c17485-1757-4fbf-b0f4-8fc7e53f5299.png">

<img width="381" alt="Screenshot 2022-04-02 at 22 04 51" src="https://user-images.githubusercontent.com/74420607/161401177-10c72b20-ca32-4d01-aaeb-cf1bd32e3e99.png">

<img width="418" alt="Screenshot 2022-04-02 at 22 05 39" src="https://user-images.githubusercontent.com/74420607/161401196-ee4c0af7-414a-4790-beaa-4d513f3b7f1e.png">

8.we set  the dat we want to send by pressing the submit

<img width="376" alt="Screenshot 2022-04-02 at 22 09 13" src="https://user-images.githubusercontent.com/74420607/161401314-44738355-b541-4ec1-88e3-ed4f36c256da.png">

this is arry before the submit...

<img width="408" alt="Screenshot 2022-04-02 at 22 10 29" src="https://user-images.githubusercontent.com/74420607/161401351-2db24739-70a1-4dfe-95d3-5f1dfd79cea5.png">

 this is the array after the submit....
 
 <img width="377" alt="Screenshot 2022-04-02 at 22 11 54" src="https://user-images.githubusercontent.com/74420607/161401377-6bb778f9-fa6d-4036-b14c-7b9ab285f2fa.png">

9. we can also check on posgres shell command
-we enter our databse infos
- we list all the database using (\l) command;
- we connect to  the relative table on the list(our person are in the example database) using (\c) command
- we list all the table avilable on selected database using the (\dt) command
-we can now use our classic query method to call everything from the person table and we can also see our last post request 

<img width="557" alt="Screenshot 2022-04-02 at 22 22 05" src="https://user-images.githubusercontent.com/74420607/161401632-5c61e2b9-ca67-44a2-b687-1bd14c58d623.png">

10.we can also check on pg admin 4
- we create a new server with the database info

<img width="646" alt="Screenshot 2022-04-02 at 22 25 53" src="https://user-images.githubusercontent.com/74420607/161401745-74ee2bea-e603-4755-a952-e9fe885da448.png">

<img width="647" alt="Screenshot 2022-04-02 at 22 26 34" src="https://user-images.githubusercontent.com/74420607/161401765-2a3fe2e1-2512-4a6d-bacb-86b85f0c9af1.png">

-we connect to the relative server

<img width="311" alt="Screenshot 2022-04-02 at 22 27 15" src="https://user-images.githubusercontent.com/74420607/161401781-97678017-f78e-4e38-934b-1b0771327a2d.png">

- we will see a list of info but what we care is table 

<img width="275" alt="Screenshot 2022-04-02 at 22 28 23" src="https://user-images.githubusercontent.com/74420607/161401809-25367dd5-2e86-4c6e-b518-dc5dd7589969.png">

-right click on the person table and click on view all row or choose on of the other options and we will see a query editor page and a data output on the bottom with our last entry at the end

<img width="773" alt="Screenshot 2022-04-02 at 22 31 03" src="https://user-images.githubusercontent.com/74420607/161401883-5b0a44d5-8028-4bbc-b076-054f679c9854.png">











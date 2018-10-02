# 2811ICT Codie Little - s5075952
## Github
I used multiple branches in development to allow me to test new features without fear of breaking any other changes. 
I commited my changes frequently and merged these changes to Master when I was happy with the progress.
## Data
I had two JSON files for storing data. 'authData.json' was used to store all the information about users. Each user object had a name, email, auth level and an array of groups that they are members of. 

In 'chatData.json' the data for each group was stored. The group object had a name, and an array of channel objects, with each channel having a name. 

Requests were passed from the client to the server via a specific route and the data was returned back as a response. 

# Data Structures & Mongo Collections
 - /credentials: 
   The credentials collection will contain the data for each of the different users which have been created. This collection will also be used to store different records about different users which will store a new record for each group that the user is in. From here, each of these records will contain an array of channels that the user has been added to. 
   
   Example User: ```{"_id": ObjectId, "username": "Codie", "password": "Super", "auth": 0}```
# Testing 
Unit testing for this web app was completed using the node module Mocha. 
Tests were ran for the user authentication routes of the node server. 
To run the tests I changed the ```package.json``` file to run mocha when the test script is ran. From there, ```npm test``` will run the rests I have configured and provide the results from there.

## Routes - All routes began with '/api':
 - /groups: 
 
    Parameters: Username

    Return Values: ```{'groups': groups}```
    
    Purpose: Returns the groups which the user is in.

 - /reg:
    Parameters: Username, Email, AuthLvl
    
    Return Values: ```{'username': uname, 'success': true}```
    
    Purpose: To register a new employee. The client will parse the new username, email and the auth level to the server for registration.
    
 - /delete:
    Parameters: username 
    Return Values: ```{'Success': true/false}```
    Purpose: To delete a user.

 - /auth:
 
    Parameters: username 
    
    Return Values: ```{'Success': true/false}```
    
    Purpose: To authenticate the user and determine if there is a valid user with this username
    
 - /update: 
 
    Paramaters: Username and group name
    
    Return Values: ```{'Success': true/false}```
    
    Purpose: To update the authData.json file when a new group is added. 
    
 - /getdata:
 - /adduser: 
 
    Parameters: Username and Group

    Return Values: ```{'Success': true/false}```

    Purpose: To add a user to the specified group/channel 
 
 - /removeuser:
 
    Parameters: Username and Group

    Return Values: ```{'Success': true/false}```

    Purpose: To remove a user from a specified group/channel 
    
    
 - /newchannel: 
 
    Parameters: Username, Group and channel

    Return Values: ```{'Success': true/false}```

    Purpose: To add a new channel the be a child of a group. 


## Angular Architecture
I used 3 main components for my application; login, groups and chat. The login function took the input from the client and sent a get request to the server to authenticate the user based on the username entered. The groups function is where all the different groups and channels were displayed that the user was in. The chat component would be used to send messages from the client side to the server which are seperated into different rooms. 

The only service I used was the chat service, which was responsibile for sending and receiving messages using SocketIO.
To navigate to the different components I used a router and the paramaters 'skipLocationChange' set to true. This meant that the URL was not changed when navigation occured. This essentiatlly created a single page application.

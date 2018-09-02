# 2811ICT Codie Little - s5075952
## Github
I used multiple branches in development to allow me to test new features without fear of breaking any other changes. 
I commited my changes frequently and merged these changes to Master when I was happy with the progress.
## Data
I had two JSON files for storing data. 'authData.json' was used to store all the information about users. Each user object had a name, email, auth level and an array of groups that they are members of. 

In 'chatData.json' the data for each group was stored. The group object had a name, and an array of channel objects, with each channel having a name. 

Requests were passed from the client to the server via a specific route and the data was returned back as a response. 


## Routes - All routes began with '/api':
 - /groups: 
 
    Parameters: Username

    Return Values: {'groups': groups}
    
    Purpose: Returns the groups which the user is in.

 - /reg:
    Parameters: 
    Return Values: 
    Purpose: 
 - /delete:
    Parameters: username 
    Return Values: {'Success': true/false}
    Purpose: To delete a user.

 - /auth:
 
    Parameters: username 
    
    Return Values: {'Success': true/false}
    
    Purpose: To authenticate the user and determine if there is a valid user with this username
    
 - /update: 
 
    Paramaters: Username and group name
    
    Return Values: {'Success': true/false}
    
    Purpose: To update the authData.json file when a new group is added. 
    
 - /getdata:
 - /adduser:
 - /removeuser:
 - /newchannel: 


Describe the organisation of your Git repository and how you used it during the
development of your solution
● Description of data structures used in the client and server to represent the various
entities, e.g.: users, groups, channels, etc.
● A description of how you divided the responsibilities between client and server (you are
encouraged to have the server provide a REST API which returns JSON in addition to a
static directory)
● A list of routes, parameters, return values, and purpose
● Angular architecture: components, services, models, routes

## Angular Architecture
I used 3 main components for my application; login, groups and chat. The login function took the input from the client and sent a get request to the server to authenticate the user based on the username entered. The groups function is where all the different groups and channels were displayed that the user was in. The chat component would be used to send messages from the client side to the server which are seperated into different rooms. 

The only service I used was the chat service, which was responsibile for sending and receiving messages using SocketIO.
To navigate to the different components I used a router and the paramaters 'skipLocationChange' set to true. This meant that the URL was not changed when navigation occured. This essentiatlly created a single page application.

Building a RESTful API
An "uptime monitor" allows users to enter
URLs they want monitored, 
and receive alerts when those resources 
"go down" or "come back up".

the app include sign-up and sign in features.

uptime checks and settings features are also included.

include functionality for sending SMS alert
to user rather than an email.

1. the API listens on a PORT and accepts incoming 
HTTP requests for POST,GET,PUT,DELETE and HEAD.

2. The API allows a client to connect,
then create a new user, then edit and delete that user.

3. The API allows a user to sign in which gives them a token
that they can use for subsequent authenticated requests.

4. The API allows the user to sign out which invalidates
their token.

5. The API allows a signed-in user to use their token to create a new
"check". (task for the system to check a given URL to see if it is up or down)

6.The API allows a signed-in user to edit or delete any of their checks.
and also limit the checks to 5 checks.

7.In the background, workers perform all the checks at the appropriate times,
and send alerts to the users when a check changes its state from "up" to "down",
or vice versa.
check would runs once a minute in the background.
"up" and "down" is defined by the user.
user would receive an sms if the check state changes from up to down
or down to up.

- use twilio to be sending sms
- no 3rd library will be used, only nodeJS
- as a simple program, i will use the filesystem
as a key-value store of JSON docs. in a real
app, i would use a DB.


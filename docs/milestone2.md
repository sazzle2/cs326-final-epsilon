# Server API
The script files for each html page need to communicate with the server to retrieve information from the storage JSON. The API does this with the following operations:

/register which allows for a new user to sign up

/login which allows for a user to login

/user is the profile page

/user/favorites/view returns the favorites array

/user/favorites/add adds new items to the favorites array 

/uniques/view returns unique menus of all 4 dining halls

/search a GET function that calls the dining API, filters based on days and filter functions, returns array of objects, each item in the array is a dining item, each object has "item name", "meal of the day", "date" and "dining hall"

Alan:

Ben:

Alex: created and implemented the server using express, and implemented the storage to use to store items that help with persistent data being used when users exit off the website, created the heroku. fixed and solved issues and bugs that were throughout moments of this project
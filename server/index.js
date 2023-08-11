// uses nodeJS require function, which loads modules and gives access to exports
const path = require('path');
const express = require("express");
const contact = require("./contact.js")


// port for listening is 3001 or variable as per Heroku
const PORT = process.env.PORT || 3001;

// returns an new express application object
const app = express();
app.use(express.json());

app.use('/api/contactsend', contact);
// for routing defines an api end point with /api, responds with json
// routing


// set-up tester code
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });



  

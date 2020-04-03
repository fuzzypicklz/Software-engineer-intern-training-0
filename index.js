/* ATTENTION: Do not change the starter code. Changing starter code will result in points deductions */

/* the package that we use to initialize http requests */
const http = require('http');

/* TODO initialize the function 1 to appropriate elements */
var function1=null;

/* TODO initialize the function 2 to appropriate elements */
var function2=null;

/* the Json that will be processed */
const webJSON={
  arrays: [
      {
          user: "User1",
          password: "12345",
          keyNumbers:[1,2,3,4,5,6]
      },

      {
          user: "User2",
          password: "23421",
          keyNumbers:[4,2,4,5,6,7]
      },

      {
          user: "User3",
          password: "54321",
          keyNumbers:[5,5,3,2,1,4]
      },
    ]
};


const server = http.createServer(function(req, res){
    /* TODO add your code in the function */
    /* whenever the request was made */
    console.log("Got a request");

    /* end the request with the following message */
    res.end("Hello World");

});

/* which port we are going to use for http requests */
server.listen(3000);
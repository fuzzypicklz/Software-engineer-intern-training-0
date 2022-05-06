/* ATTENTION: Do not change the starter code. Changing starter code will result in points deductions */

/* the package that we use to initialize http requests */
const http = require('http');
const module1 = require('./module1')
const module2 = require('./module2')
/* TODO initialize the function 1 to appropriate elements */

console.log(module1)
var function1=module1.getName();

/* TODO initialize the function 2 to appropriate elements */
var numero = 0;

/* the JSON that will be processed */
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

var function2=module2.processJSON(webJSON);
const server = http.createServer(function(req, res){
    /* TODO add your code in the function */
    /* whenever the request was made */
    console.log("Got a request");
    console.log(function2)
    /* end the request with the following message */
    res.end("Hello World your computer has virus? "+function2);

});

/* which port we are going to use for http requests */
server.listen(3000);
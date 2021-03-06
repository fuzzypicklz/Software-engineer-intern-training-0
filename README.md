# Programming Assignment 0 - NPM Starter

## Get & setup the repository(assignment)

First clone the repository to your station <br>
`git clone https://github.com/PVNETEdu/Software-Engineer---Program-Assignment-0.git`

Be sure to add the base repository as one of your remote since I might update README <br>
`git remote add projectDescription https://github.com/PVNETEdu/Software-Engineer---Program-Assignment-0.git`

To keep updated to of the assignment, update your project <br>
`git pull projectDescription master`

Create a new branch with your name and start working <br>
`git checkout -b <your name>`

Check if you are on your branch <br>
`git branch`

First we need to install all of the npm dependencies run: <br>
`npm install`

To check everything worked well, go to localhost:3000 to check if you see HelloWorld: <br>
1. run: `node index.js` to run the index file
2. put: `localhost:3000` in the browser and check if you see HelloWorld message.

## Overview
For this assignment, you will be practicing the basic structure of the Node server-side rendering frame work and how it works. 

### Table of Contents
**[Files to complete](#files-to-complete)**<br>
**[Part One: Get Started](#part-one-get-started)**<br>
**[Part Two: Make module1](#part-two-make-module1)**<br>
**[Part Three: Make module2](#part-three-make-module2)**<br>
**[Part Four: Comments and Style](#part-four-comments-and-style)**<br>
**[Part Five: Commit and Submit](#part-five-commit-and-submit)**<br>

## Files to complete
**index.js** - function completion - api route modification
**module1.js** - to be implemented with one function `getName()`
**module2.js** - to be implemented with one function `processJSON(input)`

## Part One: Get Started
You should import it to your IDE of choice WebStorm recommended. 

By default, your project should have no errors and contain the following root items:

**node_modules** - The library folder for you to use node packager manager<br>
**index.js** - The javascript file where the start code is in(make sure to read this file carefully)<br>
**package.json** - This is all the dependencies that NPM will look into when you install or delete packages<br>
**package-lock.json** - Describes the exact tree that was generated by NPM<br>

Please seek help from me or any course staffs if you are missing any of these files

## Part Two: Make module1
Make a new javascript file in the repository called `module1.js` in that file, make a function name `getName()` with no parameter that will return your name (first and last) as one string. 

Make sure that your module exports this function. 

Assign that function to a constant called `function1` in the `index.js` file.

Change the `createHTTP` function so that it is not going to show Hello World in the web page when request is called. Look for which function that you need to change. 

## Part Three: Make module2
Make a new javascript file in the repository called `module2.js` in that file, make a function name `processJSON(input)` that will take a parameter called input. 

- this `input` parameter will be a JSON object with the following setup:<br>

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

You can also go checkout the `webJSON` object in `index.js` that is exactly the previous setup. 

Now your function will take in this parameter, and you will return a 3x3 2D array, the FIRST ARRAY will consist all the `user` objects, the SECOND ARRAY will consist all of the `password` objects, and the THIRD ARRAY will consist all of the `keyNumbers` objects.

Make sure that your module exports this function. 

Assign that function to a constant called `function2` in the `index.js` file.

Display the array along with your name in the page when a request was made(This is a little tricky how would you display both things with one `end` function? Give that a try!)

## Part Four: Comments and Style
Make sure you comment you code on the elements you have made. You are not graded for making comments but they are always a good practice(Industries have high standards on how you make comments).

For this assignment, you are not being graded in terms of style, but make sure that your code has good style(ex: indentation etc)

## Part Five: Commit and Submit
Once you have finished all the works and ready to submit your assignment, make a new pull request for merging into master and @PVNetEdu me as a reviewee so I will know that your code is ready to be reviewed. 

# Grade:  /100
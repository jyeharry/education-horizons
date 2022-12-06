# Education Horizons Coding Challenge

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Thought process

To get the 32768 unique colours was simple, I just had to create three nested loops (one for each colour) which each iterated from 7 to 255, incrementing by 8 each time and therefore splitting the three colours into 32 steps. I then added each combination to an array. 

This gives the app a Big O complexity of O(n^3) which is pretty slow, but as I was essentially creating a cartesian product this was really my only option.

I then shuffled the array using lodash before rendering it because I thought it looked ugly having each colour render in the order they were made.

## Getting started

To get started, run `npm install` to install dependencies then run `npm start` to boot up the app.

It should automatically open your browser but if it doesn't, open your browser and navigate to `localhost:3000` (make sure no other apps are running on this port)

## Testing

I wrote a simple test that checks if there are the correct number of colours on the page and no duplicates.

To run this test, enter `npm test` at the commandline.

## Dependencies

This project was built using:

- ReactJS v18 with TypeScript v4
- lodash
- styled-components

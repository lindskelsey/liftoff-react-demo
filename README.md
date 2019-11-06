Let's create a React project!

First, we need to download Node:

Windows:

https://nodejs.org/en/

Mac:

`brew install node`

Let's install the existing dependencies:

`npm install`

Now let's install some more dependencies we will need:

`npm install --save @material-ui/core`

`npm install --save react-router-dom`

`npm install --save axios`

Let's run the app to make sure everything install correctly

`npm run start` will open the app on `http://localhost:3000`

To stop running the app hit `ctrl + c`

 The first thing we need to do is set up some routing for our page.

 Let's use this tutorial that will go into more depth: https://blog.pshrmn.com/simple-react-router-v4-tutorial/ 
 First let's update our App.js

 ```
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div>
        <Header />
        <Main />
      </div>
    );
}

export default App;
```
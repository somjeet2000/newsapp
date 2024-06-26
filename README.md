## NEWSMONKEY

NewsMonkey is an application used to get the daily dose of news for free in different categories like Health, Sports, Science, Technologies, Entertainment etc.

### How to Install

Get the code from GitHub into the local, and write it into the console

### `npm install`

This will install all the necessary packages, that are required to run the NewsMonkey Application.

After the installation, we need to get an API key to run the application. This application fetches the API provided by the [newsapi](https://newsapi.org) and renders it into the display.

To get the API key, you need to register for this account. After the registration, they will provide you with the API key. Once the API key has been generated create one new file ".env.local".

Why did we create this file?
This file stores your API key, if you want to publish this website into GitHub, your API key should not be visible to others, Hence we can store our API key in this file and export the API key into our App.js. Please consider the name should be the same as provided in the App.js.

### `For eg - REACT_APP_NEWS_API="{API KEY PROVIDED BY THE NEWSAPI.ORG}"`

### How to Run

After adding the API key to the component, you can run the application using NPM.

### `npm run start`

It will run the application into your local [system](http://localhost:3000/)

### Limitations

This API will only work on the localhost machine. We have some limitations mentioned by the newsapi.org. If you use the developer version which is free of cost, it will only provide you the data if the application is running on a localhost URL. If any other URL, it will not send the API data and the App will not work.

To run the API on other URLs as well, then you've to buy their subscriptions.

### Recommendation

Use the API in the localhost URL only. Don't deploy this application. It will not work. In future, if we receive any similar API like newsapi, which allows us to deploy the application, we can use it.

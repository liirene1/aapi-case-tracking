V1:
Priorities #1:
1. Display Map with pins
  Map has legend for pins - yellow = assault, red = death
2. Display Article View (most recent 25)
3. Admin - Add Article (/admin route)
  3a. Google Maps autocomplete for Location field
4. Map/Article views look nicely styled
5. Split screen functionality
  on load:map on left, articles on right
  bar/arrow button in the middle to expand map to full screen, bar to move to the right, arrow button changes direction   

Next #2:  
1. Admin can edit or delete own article. Superadmin can edit or delete any
2. Article View - how to handle next 25 - scroll fetch?
3. When user clicks on pin on map, article view (appears if hidden) & changes to articles for that location (link on top to refresh to all locations)

Final #3:
1. Google Analytics to track if people are visiting the site, location, do users come back
2. WE NEED A NAME for the site!
3. Team Page - for our dev team & editor contributers
  4a. Team Page has link to Admin signin page
4. When article is within a week for location, pin will jump up and down (animation)


V2: Mine data off social media or grab from AAPI database


IL 3/30: Set up basic views
4/3: Set up redux flow, get 3 mock articles to render
4/10: Display map & pins, create route for form
Goal:
4/11: Fix split screen view, display legend and custom pins, add Google Maps autocomplete for location field
4/17: Can add article to DB, can get articles from DB (update redux flow)
4/18: Style article and map view, user click on pin functionality


Database fields:
Article table:
date: "", -> Date object?
headline: "",
location: "",
newsLink: "",
donationLink: "",
violenceType: "",
lat: "",
lng: ""
------------------------------------------------------------------------------------------------------------




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

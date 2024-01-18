# File Structure

## src directory
This directory houses all of our config files and package.json file.

## App Folder
The app folder contains all of our routes, with each route being a single folder containing a page.jsx component. Each Folder can contain subfolders which can be nested routes for the particular main route. For example, here we have a blog route (/blog) which gives us all the posts that users make. When we click a single post we are taken to a sub-route (/blog/post-1) which will display a single post by a user. These nested route folders should be named with square brackets e.g. [post] or [slug]. 

The app folder also houses any global styles that can be applied to any route and the main `layout.js` file which defines the main layout which applies to every page in the application. For example, the main layout can have a Navbar and Footer components as these are required on every page in the application. We can also have a `loading.jsx` file which acts as a lazy loader as we navigate between routes. The `not-found.jsx` file acts as a default 404 page in case we make a request to a non-existent route. Finally, the `page.jsx` file in the app route acts as the default homepage for our application.

## Components Folder
The components folder houses all of our components which we can export to our main pages/routes.

## lib/libraries folder

This folder is used for our backend e.g. our `.env` file, mongodb connections, data models etc.

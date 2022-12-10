# RedTech
This project is part of a job interview process for RedBull.

## Link to the application

To access the application, click [here](https://jazzy-paprenjak-ba4e85.netlify.app/).

# Project features

- After login into the application, the user is able to select videos or images
of different topics on the "Content" page.

- When clicking on the **Images or Videos** button in the selected topic, a new page
will be rendered showing a list of 50 contents related to the topic.
    - Each item on this list will have the content file name, resolution, and date
    of creation.

- When clicking over the content, a preview of the content will be presented.

# Known issues

- Make use of env variables to store the private key for Pixabay
    - This is a serious issue on the app currently
    - Should use env variables or an external service like Vault to store this key
- A return button between the pages is missing
    - And the logic to control the navigation
- The authorization is not preventing non-logged users to access the content
    - Improve the user authorization when accessing all the pages
    - Only allow logged users to access the content
- There is no pagination in the list of contents
    - Improve the content item list component to support pagination
    - Improve the Pixabay service component to allow pagination
- Improve the error handling when fetching the data from the Pixabay API
    - Show error messages to the user
- Improve the error handling in the login page
    - Show error dialog or message instead of raising an alert on the page
    - Show the user how the email and password should look like

# Technical Decisions

- I will use [GitHub](https://github.com/) as the Version Control System.

- I chose to work with [*ReactJS*](https://reactjs.org/) instead of *EmberJS* because I've worked with 
ReactJS before. As they are not my day-to-day tool, I prefer to use something 
that I have, at least, some familiarity with.

- I also decided for [TailwindCSS](https://tailwindui.com/) to build a more admirable application for you.
I was used to using Boostrap, but for this study case, I chose TailwindCSS.
    - TailwindCSS recommends headlessui and heroicons packages for ui and icons
    components

- I used [Netlify](https://docs.netlify.com/) to deploy the application. I used
Netlify to deploy the frontend application in my first job in Brazil, and it was
helpful and easy. I connected the GitHub repository there, and for every push
command to the *main* branch, it will trigger the deployment process.

- To control the state of the application/contents/pages I used the React hooks 
like useEfect, useState, setState, etc.

- I splited the components, pages, services in different folders detailed in the 
next section. With that I could organize my code in a better way.

- During the development I kept a list of TODOs, in order to be able to implement 
the requirements. Once I was implementing it, I checked out all the items in the TODO list.

- I used only one branch on GitHub to develop the project. I prefer doing it like this
because it is a small project with only one person working on it. But using multiple branches
would not be a problem.

# Project organization

- Routes: as the number of routes is not big, I prefer to keep the logic of the route
in the index.js file instead of creating a new folder for it.

- Folders structures:
    - pages: all the application's pages are in this folder
    - services: all the external communication are in this folder
    - components: the pages' components are in this folder
    - assets: contents like images are in this folder
    - models: classes used as models in the application are in this folder

# Running the project locally

There is a README section inside the folder **redtech**, created by default 
from the create-react-app command that could be used to guide you when running 
and contributing to the app.

In order to run the project you need to be inside the folder **redtech** and run 
the start command:

``` 
cd redtech
npm start
``` 

The application will be available in the address: `http://localhost:3000`.
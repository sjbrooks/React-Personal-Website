import memoryCardGame from './Matching Game.gif';
import jobly from './Jobly.gif';
import warbler from './Warbler.gif';
import jeopardy from './Jeopardy.gif';
import personalSite from './PortfolioSite.gif';


const projects = [
  {
    img: jobly,
    projectName: "Jobly React App",
    text: "Fullstack Javascript job searching and connecting app built with a React frontend, PostgreSQL database, and Node/Express backend. App allows users to sign up or login, browse and apply for posted jobs and search them by position, browse and search hiring companies by name, and view the jobs posted by each company. It also allows users to edit their profile info. Finally, the authentication and authorization middleware protects certain routes so that only the right logged in users can view certain pages. This project taught me how to think through component hierarchy more strategically from the very beginning, which helped me better manage state throughout development. Note: Although I wrote a version of the backend separately, the deployed version of this app uses the backend written by the school (this was so that each pair could start with the same codebase when building out the React frontend).",
    demoLink: "http://jobly.demo.sjbrooks.com/",
    githubLink: "https://github.com/sjbrooks/Jobly"
  },
  {
    img: warbler,
    projectName: "Warbler Flask App",
    text: "Twitter clone, fullstack Python app with Flask backend, PostgreSQL database, and Jinja-based templating for the frontend. I built off of a somewhat functional clone to add the logout route with succes/failure alerts, fixed the user profile and user card UI to show the user's info and image, added routes and a form to give logged in users the ability to edit their profile, fixed the homepage query to show only the most recent 100 warbles from users that the user is following, added the ability to like and dislike messages, and wrote unit tests for the models and integration tests for the views. This project taught me the importance of good documentation to stay organized in larger code bases, as well as discipline around writing a robust set of tests.",
    demoLink: "https://r15-warbler.herokuapp.com/",
    githubLink: "https://github.com/sjbrooks/Warbler"
  },
  {
    img: personalSite,
    projectName: "Portfolio React App",
    text: "I built my personal site as a React App to make it quicker to navigate around and help solidify my knowledge of client-side routing and React app deployment. The app features a simple hierarchy with components for the NavBar, each page of the website, and a few additional shared presentational components for formatting across pages, like the ParagraphCard (holding the title and paragraph text).",
    demoLink: "http://sjbrooks.com/",
    githubLink: "https://github.com/sjbrooks/React-Personal-Website"
  },
  {
    img: jeopardy,
    projectName: "Jeopardy Game",
    text: "Game that I built early on in my Rithm bootcamp experience as a part of an assignment to get comfortable working with axios, external APIs, and jQuery. Upon clicking start, it makes a call to jservice to pull a random set of categories, and a random set of questions for each category. Using the jservice response, the game dynamically generates an HTML board with each cell holding a question mark, the question, and answer. Upon clicking a cell, a class is toggled to determine which of those three to show. At any point, the user can draw a new board and new questions by pressing restart. Note: Because this was part of an assessment, I can't share the repo for this project so I've linked to my general GitHub profile instead.",
    demoLink: "http://jeopardy.demo.sjbrooks.com",
    githubLink: "https://github.com/sjbrooks/"
  },
  {
    img: memoryCardGame,
    projectName: "Memory Card Game",
    text: "Card-based memory game built using HTML, CSS, and JavaScript that I built before attending Rithm school when I was first learning about event listeners. Players win the game by matching all the cards, with the goal of winning in as few attempts as possible. The score of your best game is persisted in local storage. Player can reset the game (and reshuffle the cards) at any time.",
    demoLink: "http://memory-game.demo.sjbrooks.com",
    githubLink: "https://github.com/sjbrooks/Memory-Game"
  }
];

export default projects;
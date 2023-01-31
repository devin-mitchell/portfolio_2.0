import Knot from "../components/Knot";

export const PROJECTS = [
  {
    index: 1,
    title: "HighTop",
    link: "https://www.hightop.com/",
    color: "#06FDFD",
    bullets: [
      {
        text: "Converted repo from Javascript to Typescript to improve engineers productivity and accuracy",
      },
      {
        text: "Changed all remaining class components to functional components allowing engineers access to hooks",
      },
      {
        text: "Increased test coverage from roughly 60% to 88% using Jest and testing-library/react-native",
      },
      {
        text: "Worked hastily across other teams to implement a rebranding from Genesis Block to Hightop",
      },
      {
        text: "Lead the frontend implementation of our Golden Ticket feature, which allows users to send friends and family aa link to enter the app while avoiding our waitlist",
      },
      {
        text: "Quickly developed skills in Solidity and Vyper to deliver our web3 application resulting in Series A funding",
      },
    ],
    bulletIcon: <Knot color={"#06FDFD"} width="40px" height="40px" />,
  },
  {
    index: 2,
    title: "Wordle",
    link: "https://github.com/devin-mitchell/wordle",
    color: "#34FF15",
    bullets: [
      {
        text: "Using React and Typescript, replicated wordle application",
      },
      {
        text: "Added matching animations using CSS classes",
      },
      {
        text: "Created an ongoing list of possible solutions using JSON API",
      },
    ],
    bulletIcon: <Knot color="#34FF15" width="40px" height="40px" />,
  },
  {
    index: 3,
    title: "RUMBL",
    link: "https://github.com/devin-mitchell/rumbl",
    color: "#6A0DAD",
    bullets: [
      {
        text: "Using Elixir, Phoenix, and LiveView, created an application that allows users to upload videos and leave timestamped comments on other user's videos",
      },
      {
        text: "Created forms in LiveView utilizing Ecto changesets to gather information, validate information, and persist the data to teh Postgres DB",
      },
      {
        text: "Added user authentication by hashing passwords with pbkdf2_elixir then persisting to the DB",
      },
      {
        text: "Wrote tests for views, controllers, and data layer to allow new changes to be made with confidence",
      },
    ],
    bulletIcon: <Knot color={"#6A0DAD"} width="40px" height="40px" />,
  },
  {
    index: 4,
    title: "HRF",
    color: "#FF69B4",
    link: "https://github.com/BloomTech-Labs/human-rights-first-police-fe-a",
    bullets: [
      {
        text: "Delivered form feature via React Router used by Twitter bot to prompt users for more information regarding tweets of police brutality, resulting in more accurate data in app reporting human rights violations",
      },
      {
        text: "Helped provide interactive map features allowing users to find instances of police brutality by location",
      },
      {
        text: "Refactored component to properly display by overwriting CSS in Node modules folder, resulting in a more clear representation of data",
      },
      {
        text: "Lead the frontend team and assigned tasks to achieve maximum efficiency",
      },
    ],
    bulletIcon: <Knot color={"#FF69B4"} width="40px" height="40px" />,
  },
  {
    index: 5,
    title: "IDENTICON",
    link: "https://github.com/devin-mitchell/identicon",
    color: "#FF0",
    bullets: [
      {
        text: "Built a program using Elixir that, when run, creates a custom identicon .png based on the user's input",
      },
      {
        text: "Developed greater understanding of the tools offered through Elixir",
      },
    ],
    bulletIcon: <Knot color="#FF0" width="40px" height="40px" />,
  },
];

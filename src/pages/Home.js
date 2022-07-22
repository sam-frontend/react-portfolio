import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import ugo from '../assets/ugo.jpg';
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
    <img src={ugo} alt='UGONNA'/>
      <div className="about">
        <h2> Hi everyone...<br/> my name is Sam Ugonna</h2>
        <div className="prompt">
          <p>
            I am a software engineer,with a passion for learning,creative and solving world complex problems.
          </p>
          <GithubIcon />
          <EmailIcon />
          <LinkedInIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
            HTML, CSS,ReactJS, Redux-toolkit,Webpack/gulp,Vite,Axios,Fetch,Json, React-Native, NPM,Xcode,Android studio,
              MaterialUI, Yarn,Unit test-Jest,VS code editor,codesandbox, TailwindCSS,TailwindDaisyUI, StyledComponents,git/github,JWT
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, MongoDB,SQL,Firebase,Firestore,Restfull API,cors,</span>
          </li>
          <li>
            <h2>UI/UX</h2>
            <span>
              Figma-Survey,Flowchart,Wireframe,Ideat,Prototype,Userbility test
            </span>
          </li>
          <li>
            <h2>Hosting</h2>
            <span>
              Netlify,Heroku,Vercel,Github,hostinga,Google playstore,Apple store
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;

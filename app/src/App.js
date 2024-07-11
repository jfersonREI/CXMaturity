import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { routePaths } from "./index.const";


import Logo from "../src/assets/logo-rei.svg";
import CoverImage from "./assets/landing/landing-cover.png";
import Landing from "./components/Layout/Landing/Landing";

function App() {

  const navigate = useNavigate();
  const handleClick = useCallback(() =>{
    console.log("onclick")
    navigate(routePaths.questions)
  }, [navigate]);


  return (
    <div className="App">
      <Landing
        logo={Logo}
        logoAlt="REI"
        subtitle="CX Maturity"
        title="Assess your project's CX maturity level"
        copy="Each year, we engage with project managers to gain valuable insights 
            into project performance, specifically focusing on customer experience (CX). 
            Our project maturity assessment process ensures that every REI project is on the 
            right track. Let's elevate project success together!"
        btnText="Take the CX maturity assessment"
        image={CoverImage}
        alt="CX Maturity Assessemnt"
        badge="CX"
        timeComplete="15 minutes"
        dueDate="5/23/25"
        onClick={handleClick}
      />
    </div>
  );
}

export default App;

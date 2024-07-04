import Container from "./components/Container/Container";
import LandingCover from "./components/Layout/LandingCover";
import LandingDetails from "./components/Layout/LandingDetails";
import LandingWrapper from "./components/Layout/LandingWrapper";

function App() {
  return (
    <div className="App">
      <Container>
        <LandingWrapper>
          <LandingDetails
            subtitle="Subtitle"
            title="Assess your project’s CX maturity level"
            copy="Each year, we engage with project managers to gain valuable insights into project performance, specifically focusing on customer experience (CX). Our project maturity assessment process ensures that every REI project is on the right track. Let’s elevate project success together!"
          ></LandingDetails>
          <LandingCover></LandingCover>
        </LandingWrapper>
      </Container>
    </div>
  );
}

export default App;

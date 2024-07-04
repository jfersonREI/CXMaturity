import Container from "./components/Container/Container";
import LandingCover from "./components/Layout/LandingCover";
import LandingDetails from "./components/Layout/LandingDetails";
import LandingWrapper from "./components/Layout/LandingWrapper";

function App() {
  return (
    <div className="App">
      <Container>
        <LandingWrapper>
          <LandingDetails>ddd</LandingDetails>
          <LandingCover></LandingCover>
        </LandingWrapper>
      </Container>
    </div>
  );
}

export default App;

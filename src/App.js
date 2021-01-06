import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3";
import Player from "./components/Player";
import { useSelector } from "react-redux";
import {
  StyledApp,
  StyledHeading,
  StyledFooter,
} from "./styled components/styledApp";
import { GlobalStyle } from "./styled components/global";

import { ThemeProvider } from "styled-components";
import * as theme from "./styled components/theme";

function App() {
  const tracks = useSelector((state) => state.recommendations);
  const currStep = useSelector((state) => state.currStep);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <StyledApp>
          <StyledHeading>Pick your songs</StyledHeading>
          {currStep === "Form1" ? <Form1 /> : null}
          {currStep === "Form2" ? <Form2 /> : null}
          {currStep === "Form3" ? <Form3 /> : null}
          {currStep === "tracks" && tracks ? <Player /> : null}
          <StyledFooter>
            Created by Ola Frost. Powered by Spotify API.
          </StyledFooter>
        </StyledApp>
      </ThemeProvider>
    </>
  );
}

export default App;

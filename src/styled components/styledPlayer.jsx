import styled from "styled-components";

export const StyledHeading = styled.h2`
  box-sizing: border-box;
  font-size: 1.2rem;
  text-align: center;
  justify-content: center;
  color: white;
  border: 4px solid white;
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  margin: 0;
  height: 100%;
  grid-area: StyledHeading;
  @media (min-width: 680px) {
    font-size: 1.7rem;
  }

  @media (min-width: 1340px) {
    font-size: 2rem;
    justify-content: start;
  }
`;

export const StyledText = styled.div`
  border: 4px solid white;
  /* width: 100%; */
  box-sizing: border-box;
  padding: 1rem;
  grid-area: StyledText;
  font-size: 1.2rem;
`;

export const StyledH3 = styled.h3`
  margin: 1rem auto;
`;

export const StyledQuery = styled.div`
  background: white;
  color: ${(props) => props.theme.darkpink};
  padding: 3px 10px;
  margin: 0.5rem 0;
`;

export const StyledTip = styled.div`
  position: relative;
  display: inline-block;
  transform: translateY(-8px);
  cursor: pointer;
  font-size: 0.8rem;
  background-color: white;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  color: ${(props) => props.theme.aqua};
  text-align: center;
  z-index: 100;
  font-weight: 500;
  :hover > div {
    opacity: 1;
    text-align: left;
    font-weight: 500;
    z-index: 200;
  }
`;

export const StyledHover = styled.div`
  position: absolute;
  top: 0;
  left: 25px;
  width: 25rem;
  height: auto;
  background-color: rgba(255, 255, 255, 1);
  color: rgba(0, 0, 0, 0.5);
  font-size: 0.9rem;
  padding: 20px;
  opacity: 0;
  transition: opacity 200ms;
  font-style: italic;
`;

export const StyledPlayer = styled.div`
  display: grid;
  grid-template-rows: 5rem auto auto 7%;
  grid-template-areas:
    "StyledHeading "
    "StyledGrid "
    "StyledText"
    "StyledButton ";
  gap: 25px;
  margin: 1rem;
  @media (min-width: 680px) {
    /* grid-area: Main; */
    width: 60%;
  }
  @media (min-width: 1340px) {
    display: grid;
    grid-template-columns: 20rem 1000px;
    grid-template-rows: 5rem 1fr 7%;
    gap: 25px 25px;
    grid-template-areas:
      "StyledText StyledHeading "
      "StyledText StyledGrid "
      "StyledButton StyledButton ";
    /* height: 100%; */
    width: auto;
  }
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-area: StyledGrid;
  border: 4px solid white;
  justify-content: space-evenly;
  grid-template-columns: 250px;
  row-gap: 1rem;
  padding: 2rem;
  /* width: 100%; */

  @media (min-width: 680px) {
    grid-template-columns: repeat(2, 250px);
    row-gap: 1rem;
    column-gap: 1rem;
    padding: 2rem;
    /* align-content: space-between; */
  }
  @media (min-width: 1340px) {
    grid-template-columns: repeat(3, 250px);
    grid-template-rows: repeat(4, 100px);
    align-content: center;
    /* row-gap: 1rem; */
    column-gap: 3rem;
    /* width: 100%; */
    /* height: 100%; */
  }
`;

export const StyledAgainButton = styled.input`
  background-color: transparent;
  border: 4px solid white;
  color: white;
  width: 188px;
  font-size: 1.2rem;
  font-family: "Montserrat", sans-serif;

  :hover {
    background-color: white;
    color: ${(props) => props.theme.aqua};
  }

  :active {
    outline: none;
  }
`;

export const StyledIframe = styled.iframe`
  border: none;
`;

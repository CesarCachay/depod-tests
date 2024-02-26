import styled from "styled-components";

const BASE_DISPLAY_NAME = "Components__PageStyled";

const Main = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
`;

Main.displayName = `${BASE_DISPLAY_NAME}--Main`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

Content.displayName = `${BASE_DISPLAY_NAME}--Content`;

export { Main, Content };

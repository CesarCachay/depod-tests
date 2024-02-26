// vendors
import { styled } from "@mui/material";
import { Typography } from "@mui/material";

const BASE_DISPLAY_NAME = "Components__EmptyStateStyled";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

Container.displayName = `${BASE_DISPLAY_NAME}--Container`;

const Title = styled(Typography)`
  color: #757575;
  font-size: 24px;
  font-weight: 700;
  line-height: 29.26px;
  font-family: Montserrat, sans-serif;
  margin-bottom: 20px;
  margin-top: 40px;
`;

Title.displayName = `${BASE_DISPLAY_NAME}--Title`;

const Description = styled(Typography)`
  color: #757575;
  font-size: 20px;
  line-height: 23.44px;
  font-family: Roboto, sans-serif;
  margin-bottom: 20px;
`;

Description.displayName = `${BASE_DISPLAY_NAME}--Description`;

const Body = styled(Typography)`
  color: #757575;
  width: 460px;
  font-size: 14px;
  text-align: center;
  line-height: 16.41px;
  font-family: Roboto, sans-serif;
  margin-bottom: 20px;
`;

Body.displayName = `${BASE_DISPLAY_NAME}--Body`;

export const Styled = {
  Body,
  Title,
  Container,
  Description,
};

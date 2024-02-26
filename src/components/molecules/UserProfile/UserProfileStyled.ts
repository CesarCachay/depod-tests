// vendors
import { styled } from "@mui/material";

const BASE_DISPLAY_NAME = "Components__UserProfileStyled";

const Container = styled("div")`
  width: 260px;
  height: 36px;
  display: flex;
  justify-content: space-around;
  z-index: 2;
`;

Container.displayName = `${BASE_DISPLAY_NAME}--Container`;

const AvatarContainer = styled("div")`
  width: 32px;
  height: 32px;
  border-radius: 50px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

AvatarContainer.displayName = `${BASE_DISPLAY_NAME}--AvatarContainer`;

const TextContainer = styled("div")`
  display: flex;
  flex-direction: column;
`;

TextContainer.displayName = `${BASE_DISPLAY_NAME}--TextContainer`;

const UserFullName = styled("h2")`
  font-family: Montserrat, sans-serif;
  color: #ffffff;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  margin-bottom: 2px;
`;

UserFullName.displayName = `${BASE_DISPLAY_NAME}--UserFullName`;

const UserJobTitle = styled("h3")`
  font-family: Helvetica, sans-serif;
  color: #757575;
  font-size: 14px;
  line-height: 14px;
  font-weight: 400;
`;

UserJobTitle.displayName = `${BASE_DISPLAY_NAME}--UserJobTitle`;

const IconContainer = styled("div")`
  display: flex;
  height: 100%;
  align-items: center;
`;

IconContainer.displayName = `${BASE_DISPLAY_NAME}--IconContainer`;

export const Styled = {
  Container,
  UserFullName,
  UserJobTitle,
  TextContainer,
  IconContainer,
  AvatarContainer,
};

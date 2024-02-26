// vendors
import { styled } from "@mui/material";
import { Typography } from "@mui/material";

const BASE_DISPLAY_NAME = "Components__NavbarStyled";

const NavbarContainer = styled("div")`
  width: 100%;
  height: 60px;
  background-color: #2a2a2a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 28px;
`;

NavbarContainer.displayName = `${BASE_DISPLAY_NAME}--NavbarContainer`;

const LeftSection = styled("div")`
  width: 260px;
  display: flex;
  justify-content: space-between;
`;

LeftSection.displayName = `${BASE_DISPLAY_NAME}--LeftSection`;

const TitleContainer = styled("div")`
  display: flex;
  margin-left: 20px;
`;

TitleContainer.displayName = `${BASE_DISPLAY_NAME}--TitleContainer`;

const TitleFirstPart = styled(Typography)`
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 29.26px;
  color: #ffffff;
  margin-right: 6px;
`;

TitleFirstPart.displayName = `${BASE_DISPLAY_NAME}--TitleFirstPart`;

const TitleSecondPart = styled(Typography)`
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 29.26px;
  color: #c3d500;
`;

TitleSecondPart.displayName = `${BASE_DISPLAY_NAME}--TitleSecondPart`;

const RightSection = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

RightSection.displayName = `${BASE_DISPLAY_NAME}--RightSection`;

export const Styled = {
  NavbarContainer,
  LeftSection,
  TitleContainer,
  TitleFirstPart,
  TitleSecondPart,
  RightSection,
};

// vendors
import { styled } from "@mui/material";
import { Typography } from "@mui/material";

// components
import { Button } from "@/components/atoms";

const BASE_DISPLAY_NAME = "Components__UserActionsStyled";

const Container = styled("div")`
  height: 156px;
  width: 100%;
  padding-left: 100px;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  background-color: white;
`;

Container.displayName = `${BASE_DISPLAY_NAME}--Container`;

const Title = styled(Typography)`
  font-family: Montserrat, sans-serif;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  margin-top: 20px;
`;

Title.displayName = `${BASE_DISPLAY_NAME}--Title`;

const SectionsContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;

SectionsContainer.displayName = `${BASE_DISPLAY_NAME}--SectionsContainer`;

const LeftSection = styled("div")`
  display: flex;
  align-items: center;
`;

LeftSection.displayName = `${BASE_DISPLAY_NAME}--LeftSection`;

const RightSection = styled("div")`
  display: flex;
  align-items: center;
  margin-top: 28px;
`;

RightSection.displayName = `${BASE_DISPLAY_NAME}--RightSection`;

const TextButton = styled(Typography)`
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 16.41px;
  cursor: pointer;
  color: #007cad;
  margin-right: 20px;
`;

TextButton.displayName = `${BASE_DISPLAY_NAME}--TextButton`;

const StyledButton = styled(Button)`
  background-image: linear-gradient(to bottom, #007cad 100%, #00a6e8 100%);
  color: white;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 16.41px;
  padding: 8px 16px !important;
  border-radius: 36px !important;
`;

StyledButton.displayName = `${BASE_DISPLAY_NAME}--StyledButton`;

const SearchContainer = styled("div")`
  width: 574px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`;

SearchContainer.displayName = `${BASE_DISPLAY_NAME}--SearchContainer`;

const HorizontalDivider = styled("div")`
  height: 37px;
  border: 1px solid #ebebeb;
  margin-right: 16px;
`;

HorizontalDivider.displayName = `${BASE_DISPLAY_NAME}--HorizontalDivider`;

const SelectContainer = styled("div")`
  display: flex;
  flex-direction: column;
`;

SelectContainer.displayName = `${BASE_DISPLAY_NAME}--SelectContainer`;

export const Styled = {
  Container,
  Title,
  LeftSection,
  RightSection,
  TextButton,
  StyledButton,
  SearchContainer,
  SelectContainer,
  SectionsContainer,
  HorizontalDivider,
};

// vendors
import { styled } from "@mui/material";

const BASE_DISPLAY_NAME = "Components__SidebarStyled";

const Container = styled("div")`
  position: absolute;
  left: 0;
  width: 75px;
  height: calc(100% - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  padding-top: 24px;
  background-color: #2a2a2a;
`;

Container.displayName = `${BASE_DISPLAY_NAME}--Container`;

const ItemContainer = styled("div")`
  margin-bottom: 28px;
  cursor: pointer;
`;

ItemContainer.displayName = `${BASE_DISPLAY_NAME}--ItemContainer`;

export const Styled = {
  Container,
  ItemContainer,
};

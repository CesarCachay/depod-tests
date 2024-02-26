// vendors
import { styled } from "@mui/material";

const BASE_DISPLAY_NAME = "Components__InputStyled";

export const InputCointainer = styled("div")`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

InputCointainer.displayName = `${BASE_DISPLAY_NAME}--InputCointainer`;

export const Styled = {
  InputCointainer,
};

"use client";
// vendors
import { styled } from "@mui/system";
import { css } from "@mui/material";

// components
import { Box } from "@mui/material";

const BASE_DISPLAY_NAME = "Components__FormStyled";

const Field = styled(Box)(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 8px;

    ${theme.breakpoints.down("sm")} {
      gap: 24px;
    }
  `,
);
Field.displayName = `${BASE_DISPLAY_NAME}--Field`;

const TextFieldContainer = styled(Box)`
  display: flex;
  flex-direction: column;
`;
TextFieldContainer.displayName = `${BASE_DISPLAY_NAME}--TextFieldContainer`;

export const Styled = { Field, TextFieldContainer };

// vendors
import { ElementType, useMemo } from "react";

// types
import { type ResponsiveStyleValue } from "@mui/system";
import { type CSSProperties } from "@mui/material/styles/createTypography";

export type TypographyVariantsTypes =
  | "modalTitle"
  | "modalDescription"
  | "primaryButton"
  | "secondaryButton"
  | "header"
  | "footer"
  | "onboardingTitle"
  | "onboardingContent"
  | "flowTitleMobile"
  | "backButtonMobile"
  | "flowTitlePrimary"
  | "flowTitleSecondary"
  | "flowContent"
  | "modalTextLink"
  | "textFieldHelperText"
  | "informativeAlert"
  | "exitRequestButton";

export type TypographyProps = {
  text: string;
  extraStyles?: CSSProperties;
  variant: TypographyVariantsTypes;
  component?: ElementType;
};

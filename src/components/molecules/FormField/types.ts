// types
import { type ReactElement } from "react";

export enum TextFieldFormat {
  "text" = "text",
  "numeric" = "numeric",
  "currency" = "currency",
  "phoneNumber" = "phoneNumber",
}

export enum InputTypes {
  dropdown = "DROPDOWN",
  textField = "TEXT_FIELD",
}

export type FormFieldTypes = {
  name: string;
  label?: string | ReactElement;
  placeholder?: string;
  fieldType: InputTypes;
  maxLengthTextField?: number;
  textFieldFormat?: TextFieldFormat;
  getMaxLengthTextField?: (formValues: Record<string, unknown>) => number;
};

export type ControlledFormFieldTypes = Omit<
  FormFieldTypes & {
    value: string;
    helperText?: string;
    defaultValue?: string;
    dropDownLabelId?: string;
    onChange: (value: unknown) => void;
    fieldTitle?: string;
    defaultHelperText?: string;
  },
  "getMaxLengthTextField"
>;

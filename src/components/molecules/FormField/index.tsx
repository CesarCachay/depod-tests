// vendors
import { type ChangeEvent } from "react";
import { TextField } from "@mui/material";
// utils
import { formatStrToInt } from "@/utils/functions";
// styles
import { Styled } from "./FormFieldStyled";
// types
import { TextFieldFormat, ControlledFormFieldTypes } from "./types";

const FormField: React.FC<ControlledFormFieldTypes> = ({
  onChange,
  defaultValue,
  maxLengthTextField,
  textFieldFormat,
  placeholder = "",
  ...restFieldProps
}) => {
  const validateMaxLength = (textValue: string) => {
    if (maxLengthTextField && textValue.length <= maxLengthTextField)
      onChange(textValue);
  };

  const onTextFieldChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (textFieldFormat === TextFieldFormat.text) {
      validateMaxLength(target.value);
    } else {
      const { valueAsString } = formatStrToInt(target.value);
      validateMaxLength(valueAsString);
    }
  };

  return (
    <Styled.Field>
      <Styled.TextFieldContainer>
        <TextField
          {...restFieldProps}
          fullWidth
          type={textFieldFormat}
          placeholder={placeholder}
          onChange={onTextFieldChange}
          defaultValue={defaultValue}
        />
      </Styled.TextFieldContainer>
    </Styled.Field>
  );
};

export default FormField;

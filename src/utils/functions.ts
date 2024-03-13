export const formatStrToInt = (value = "") => {
  const formattedValue = value?.replace?.(/[^0-9]/g, "");

  return {
    valueAsNumber: parseFloat(formattedValue),
    valueAsString: formattedValue,
  };
};

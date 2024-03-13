// vendors
import { styled } from "@mui/material";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const BASE_DISPLAY_NAME = "Components__TableStyled";

const CustomTableHeadCell = styled(TableCell)`
  text-align: start;
  font-weight: 500;
  font-size: 12px;
  line-height: 14.06px;
  color: #757575;
`;
CustomTableHeadCell.displayName = `${BASE_DISPLAY_NAME}--CustomTableHeadCell`;

const CustomTableRow = styled(TableRow)`
  cursor: pointer;
`;
CustomTableRow.displayName = `${BASE_DISPLAY_NAME}--CustomTableRow`;

const CustomTableContentRow = styled(TableCell)`
  text-align: start;
  font-size: 14px;
  line-height: 16.41px;
  color: #2a2a2a;
`;

CustomTableContentRow.displayName = `${BASE_DISPLAY_NAME}--CustomTableContentRow`;

export const Styled = {
  CustomTableHeadCell,
  CustomTableRow,
  CustomTableContentRow,
};

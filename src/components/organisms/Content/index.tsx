import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";

// types
import { Initiatives, InitiativesListHeaders } from "./types";

// styles
import { Styled } from "./ContentStyled";

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number,
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof InitiativesListHeaders;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Name",
  },
  {
    id: "mnemonic",
    numeric: false,
    disablePadding: false,
    label: "Mnemonic",
  },
  {
    id: "id",
    numeric: true,
    disablePadding: false,
    label: "ID",
  },
  {
    id: "author",
    numeric: false,
    disablePadding: false,
    label: "Author",
  },
  {
    id: "status",
    numeric: false,
    disablePadding: false,
    label: "Status",
  },
  {
    id: "created",
    numeric: true,
    disablePadding: false,
    label: "Creation Date",
  },
  {
    id: "description",
    numeric: false,
    disablePadding: false,
    label: "Description",
  },
];

interface EnhancedTableHeadProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof InitiativesListHeaders,
  ) => void;
  order: Order;
  orderBy: string;
}

function EnhancedTableHead(props: EnhancedTableHeadProps) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler =
    (property: keyof InitiativesListHeaders) =>
    (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <Styled.CustomTableHeadCell
            key={headCell.id}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </Styled.CustomTableHeadCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableProps {
  initiatives: Initiatives[];
}

export default function EnhancedTable(props: EnhancedTableProps) {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] =
    React.useState<keyof InitiativesListHeaders>("name");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof InitiativesListHeaders,
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - props.initiatives.length)
      : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(props.initiatives, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );

  return (
    <Box sx={{ width: "100%", paddingLeft: "100px", marginTop: "32px" }}>
      <Paper sx={{ width: "100%", mb: 2, maxWidth: "1200px", marginX: "auto" }}>
        <TableContainer>
          <Table
            sx={{
              minWidth: 750,
              "& .MuiTableRow-root:hover": {
                backgroundColor: "rgba(0, 124, 173, 0.08)",
              },
            }}
            aria-labelledby="tableTitle"
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <Styled.CustomTableRow tabIndex={-1} key={row.id}>
                    <Styled.CustomTableContentRow align="right">
                      {row.name}
                    </Styled.CustomTableContentRow>
                    <Styled.CustomTableContentRow align="right">
                      {row.mnemonic}
                    </Styled.CustomTableContentRow>
                    <Styled.CustomTableContentRow align="right">
                      {row.id}
                    </Styled.CustomTableContentRow>
                    <Styled.CustomTableContentRow align="right">
                      {row.author}
                    </Styled.CustomTableContentRow>
                    <Styled.CustomTableContentRow align="right">
                      {row.status}
                    </Styled.CustomTableContentRow>
                    <Styled.CustomTableContentRow align="right">
                      {row.created}
                    </Styled.CustomTableContentRow>
                    <Styled.CustomTableContentRow align="right">
                      {row.description}
                    </Styled.CustomTableContentRow>
                  </Styled.CustomTableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: "64px" }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}

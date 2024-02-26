// // vendors
import { useState } from "react";
import { TextField, MenuItem } from "@mui/material";

// components
import { FlexContainer } from "@/components/atoms";

// styles
import { Styled } from "./UserActionsStyled";
import { Search } from "@/components/molecules";

// data
import { statusList } from "./data";

const UserActions = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <Styled.Container>
      <FlexContainer container>
        <Styled.Title>Dashboard Iniciatives</Styled.Title>
      </FlexContainer>
      <Styled.SectionsContainer>
        <Styled.LeftSection>
          <Styled.SearchContainer>
            <Search
              searchValue={searchValue}
              placeholder="Search"
              onChangeValue={(e) => setSearchValue(e)}
              onSubmit={() => {}}
            />
            <Styled.HorizontalDivider />
            <TextField
              id="outlined-select-status"
              select
              label="Status"
              defaultValue="active"
              sx={{ minWidth: "204px" }}
            >
              {statusList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Styled.SearchContainer>
        </Styled.LeftSection>
        <Styled.RightSection>
          <Styled.TextButton>EXPORT</Styled.TextButton>
          <Styled.StyledButton>New Initiative Draft</Styled.StyledButton>
        </Styled.RightSection>
      </Styled.SectionsContainer>
    </Styled.Container>
  );
};

export default UserActions;

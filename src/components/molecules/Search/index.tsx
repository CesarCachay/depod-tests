// vendors
import Image from "next/image";

// assets
import { InputSearchIcon } from "@/assets/svg";

// components
import { Input } from "@/components/atoms";

// styles
import { Styled } from "./StyledInput";
import { SearchProps } from "./types";

const Search: React.FC<SearchProps> = ({
  onChangeValue,
  searchValue,
  onSubmit,
  width,
  height,
  placeholder,
}) => {
  return (
    <Styled.InputCointainer>
      <Image
        src={InputSearchIcon}
        alt="Search"
        style={{
          position: "absolute",
          top: "16px",
          left: "12px",
          cursor: "pointer",
        }}
        onClick={onSubmit}
      />
      <Input
        color="primary"
        placeholder={placeholder}
        value={searchValue}
        onChange={({ target }) => onChangeValue(target.value)}
        width={width || "100%"}
        height={height}
        style={{
          padding: "0 0 0 40px",
          width: "340px",
          height: "55px",
          borderRadius: "60px",
        }}
        onKeyUp={(event) => {
          if (event.key === "Enter") {
            onSubmit();
          }
        }}
      />
    </Styled.InputCointainer>
  );
};

export default Search;

// vendors
import Image from "next/image";

// components
import UserProfile from "@/components/molecules/UserProfile";

// assets
import { HamburgerIcon, SearchIcon, BellIcon, WaffleIcon } from "@/assets/svg";

// styles
import { Styled } from "./NavbarStyled";

const Navbar = () => {
  return (
    <Styled.NavbarContainer>
      <Styled.LeftSection>
        <Image
          src={HamburgerIcon}
          alt="bars-icon"
          style={{ marginTop: "2px", cursor: "pointer" }}
        />
        <Styled.TitleContainer>
          <Styled.TitleFirstPart>Augmented</Styled.TitleFirstPart>
          <Styled.TitleSecondPart>TPaP</Styled.TitleSecondPart>
        </Styled.TitleContainer>
      </Styled.LeftSection>
      <Styled.RightSection>
        <Image
          src={SearchIcon}
          alt="search"
          style={{ marginRight: "16px", cursor: "pointer" }}
        />
        <Image
          src={BellIcon}
          alt="bell"
          style={{ marginRight: "28px", cursor: "pointer" }}
        />
        <UserProfile />
        <Image
          src={WaffleIcon}
          alt="search"
          style={{ marginLeft: "28px", cursor: "pointer" }}
        />
      </Styled.RightSection>
    </Styled.NavbarContainer>
  );
};

export default Navbar;

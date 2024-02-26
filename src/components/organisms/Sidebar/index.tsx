// vendors
import Image from "next/image";

// assets
import { iconsList } from "./data";

// styles
import { Styled } from "./SidebarStyled";

const Sidebar = () => {
  return (
    <Styled.Container>
      {iconsList.map((item) => (
        <Styled.ItemContainer key={item.id}>
          <Image src={item.icon} alt={item.label} />
        </Styled.ItemContainer>
      ))}
    </Styled.Container>
  );
};

export default Sidebar;

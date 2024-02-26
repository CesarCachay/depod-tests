// vendors
import Image from "next/image";

// styles
import { Styled } from "./UserProfileStyled";

// assets
import { ArrowDownIcon } from "@/assets/svg";
import UserProfilePicture from "@/assets/png/user-profile.png";

const UserProfile = () => {
  return (
    <Styled.Container>
      <Styled.AvatarContainer>
        <Image
          src={UserProfilePicture}
          height={32}
          width={32}
          alt="profile-picture"
          loading="lazy"
        />
      </Styled.AvatarContainer>
      <Styled.TextContainer>
        <Styled.UserFullName>Camilo Jones Restrepo</Styled.UserFullName>
        <Styled.UserJobTitle>Tech Director</Styled.UserJobTitle>
      </Styled.TextContainer>
      <Styled.IconContainer>
        <Image src={ArrowDownIcon} alt="arrow-down" />
      </Styled.IconContainer>
    </Styled.Container>
  );
};

export default UserProfile;

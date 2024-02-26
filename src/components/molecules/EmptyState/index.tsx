import Image from "next/image";
import EmptyResults from "@/assets/png/empty-results.png";

import { Styled } from "./EmptyStateStyled";

const EmptyState = () => {
  return (
    <Styled.Container>
      <Image src={EmptyResults} alt="empty-results" loading="lazy" />
      <Styled.Title>It's so lonely here...</Styled.Title>
      <Styled.Description>There's no initiatives yet</Styled.Description>
      <Styled.Body>
        We haven't found any initiatives yet. If you are ready to create your
        own Select the New Initiative Draft button on top right.
      </Styled.Body>
    </Styled.Container>
  );
};

export default EmptyState;

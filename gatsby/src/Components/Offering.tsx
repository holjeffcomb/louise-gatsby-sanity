import React from "react";
import { OfferingProps } from "../types";
import styled from "styled-components";

const ContainerStyles = styled.div`
  border: 1px solid white;
  border-radius: 2em;
  padding-left: 4em;
  padding-right: 4em;
  margin: 2em;
`;

const DifficultyStyles = styled.p`
  color: white;
  font-style: italic;
`;

const Offering: React.FC<OfferingProps> = ({
  name,
  description,
  difficulty,
}) => {
  return (
    <ContainerStyles>
      <h2>{name}</h2>
      <DifficultyStyles>{difficulty}</DifficultyStyles>
      <p>{description}</p>
    </ContainerStyles>
  );
};

export default Offering;

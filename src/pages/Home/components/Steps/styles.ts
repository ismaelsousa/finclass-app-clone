import styled from "styled-components/native";
import { StepProps } from "./types";

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10px;
  align-self: center;
`;

export const Step = styled.View<StepProps>`
  background-color: ${({ theme, index }) =>
    !index ? theme.colors.placeholder.main : theme.colors.background.onMain};
  height: 6px;
  width: ${({ index }) => (!index ? 6 : 12)}px;
  border-radius: 3px;
  margin: 0 2.5px;
`;

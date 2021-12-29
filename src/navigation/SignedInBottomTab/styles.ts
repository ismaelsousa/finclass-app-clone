import styled from "styled-components/native";
import { IconProps } from "./types";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.backdrop.main};
  width: 100%;
  height: 100%;
`;

export const Icon = styled.Image.attrs<IconProps>({
  resizeMode: "contain",
})<IconProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

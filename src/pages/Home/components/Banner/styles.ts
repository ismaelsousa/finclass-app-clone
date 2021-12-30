import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Container = styled.View``;

export const BannerImageBackground = styled.ImageBackground`
  height: 100%;
  width: ${({ width }) => width}px;
  justify-content: flex-end;
  align-items: center;
`;

export const TextContainer = styled.View`
  width: 80%;
  padding: 0 20px;
  align-items: center;
  justify-content: center;
`;

export const Gradient = styled(LinearGradient)`
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  max-width: 100%;
  padding: 0 20px;
`;

export const ButtonHeaderContained = styled.Pressable`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.placeholder.onMain};
  padding: 12px;
  border-radius: ${({ theme }) => theme.borders.radius.sm}px;
  flex: 1;
`;

export const ButtonIcon = styled.Image`
  height: 10px;
  width: 10px;
`;

export const ButtonHeaderOutlined = styled.Pressable`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-color: ${({ theme }) => theme.colors.placeholder.onMain};
  border-width: 0.5px;
  padding: 12px;
  border-radius: ${({ theme }) => theme.borders.radius.sm}px;
  flex: 1;
`;

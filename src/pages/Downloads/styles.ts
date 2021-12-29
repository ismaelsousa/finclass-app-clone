import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import Text from "../../components/Text";

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.colors.background.main};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled(Text)`
  text-align: center;
`;

export const Ball = styled.View`
  background-color: ${({ theme }) => theme.colors.primary.main};
  width: 4px;
  height: 4px;
  border-radius: 2px;
`;

export const ContainerBalls = styled.View`
  flex-direction: row;
  width: 70px;
  justify-content: space-between;
`;

export const Icon = styled.Image`
  width: 100px;
  height: 100px;
`;

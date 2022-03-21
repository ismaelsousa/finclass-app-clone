import React from "react";
import { useTheme } from "styled-components";
import { Container, IconBack } from "./styles";
import chevronLeft from "../../../assets/icons/chevron-left.png";
import { Props } from "./types";

const BackButton = ({ onPress }: Props) => {
  const { colors } = useTheme();

  return (
    <Container onPress={onPress}>
      <IconBack
        style={{
          tintColor: colors.backdrop.onMain,
        }}
        source={chevronLeft}
      />
    </Container>
  );
};

export default BackButton;

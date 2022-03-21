import React, { useMemo, useState } from "react";
import { Props } from "./types";
import closeEye from "./../../../assets/icons/closeEye.png";
import openEye from "./../../../assets/icons/openEye.png";
import { useTheme } from "styled-components";
import {
  Container,
  Content,
  Error,
  EyeIcon,
  Label,
  ToggleEye,
  TextInput,
  LeftIconContainer,
  RightIconContainer,
} from "./styles";

const Input = ({
  error,
  name,
  placeholder,
  secureTextEntry,
  rightIcon,
  leftIcon,
  onBlur,
  onFocus,
  ...rest
}: Props) => {
  const { colors } = useTheme();
  const [hasFocus, setHasFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const borderColor = useMemo(() => {
    if (error) return colors.error.main;
    if (hasFocus) return colors.primary.main;
    return colors.background.main;
  }, [error, colors, hasFocus]);

  return (
    <Container>
      {!!name && (
        <Label type="semiBold" size={12}>
          {name}
        </Label>
      )}
      <Content>
        {!!leftIcon && <LeftIconContainer>{leftIcon}</LeftIconContainer>}
        <TextInput
          hasLeftIcon={!!leftIcon}
          hasRightIcon={!!rightIcon}
          borderColor={borderColor}
          onFocus={(e) => {
            setHasFocus(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setHasFocus(false);
            onBlur?.(e);
          }}
          placeholder={placeholder}
          placeholderTextColor={colors.placeholder.main}
          selectionColor={colors.placeholder.onMain}
          secureTextEntry={secureTextEntry && !showPassword}
          {...rest}
        />
        {!!rightIcon && !secureTextEntry && (
          <RightIconContainer>{rightIcon}</RightIconContainer>
        )}
        {secureTextEntry && (
          <ToggleEye onPress={() => setShowPassword((old) => !old)}>
            <EyeIcon
              style={{
                tintColor: colors.placeholder.main,
              }}
              source={showPassword ? openEye : closeEye}
            />
          </ToggleEye>
        )}
      </Content>

      {!!error && (
        <Error size={10} type="bold">
          {error}
        </Error>
      )}
    </Container>
  );
};

export default Input;

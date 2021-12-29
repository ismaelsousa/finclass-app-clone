import React from "react";
import { TextInputProps } from "react-native";

export interface Props extends TextInputProps {
  name?: string;
  error?: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
}

/**
 * Styles
 */
export interface InputProps {
  borderColor: string;
  hasLeftIcon: boolean;
  hasRightIcon: boolean;
}

import { TextInputProps } from "react-native";

export interface Props extends TextInputProps {
  name: string;
  error?: string;
}

/**
 * Styles
 */
export interface InputProps {
  borderColor: string;
}

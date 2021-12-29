import React from "react";

export interface Props {
  icon: React.ReactNode;
  title: string;
  onPress?: () => void;
}

import React from "react";
import { View } from "react-native";
import { Props } from "./types";

const Separator = ({ height, width }: Props) => {
  return <View style={{ width, height }} />;
};

export default Separator;

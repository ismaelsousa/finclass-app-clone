import appColors from "./colors";

export const fonts = {
  "Montserrat-Regular": require("./../../assets/fonts/Montserrat-Regular.ttf"),
  "Montserrat-Bold": require("./../../assets/fonts/Montserrat-Bold.ttf"),
  "Montserrat-SemiBold": require("./../../assets/fonts/Montserrat-SemiBold.ttf"),
};

export const appFonts = {
  Regular: {
    fontFamily: "Montserrat-Regular",
    letterSpacing: 0,
    color: appColors["btn-primary-text"],
  },
  Bold: {
    fontFamily: "Montserrat-Bold",
    letterSpacing: 0,
    color: appColors["btn-primary-text"],
  },
  SemiBold: {
    fontFamily: "Montserrat-SemiBold",
    letterSpacing: 0,
    color: appColors["btn-primary-text"],
  },
};

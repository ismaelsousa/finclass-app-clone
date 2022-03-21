import React from "react";
import useAuth from "../hooks/useAuth";
import SignedInBottomTab from "./SignedInBottomTab";
import SignInStack from "./SignInStack";

const Navigation: React.FC = () => {
  const { isLogged } = useAuth();
  return isLogged ? <SignedInBottomTab /> : <SignInStack />;
};

export default Navigation;

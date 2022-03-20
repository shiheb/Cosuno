import React from "react";
import { ReactComponent as Logo } from "../../assets/cosuno.svg";
import useMediaQuery from "./../../pages/useMediaQuery";
import { LogoContainer, Option, Options, Root, SmallIcon } from "./styles";
const Header = () => {
  const matches = useMediaQuery("(min-width: 490px)");
  return (
    <Root>
      {matches ? (
        <LogoContainer to="/">
          <Logo />
        </LogoContainer>
      ) : (
        <SmallIcon
          src="https://www.cosuno.de/wp-content/themes/cosuno/assets/img/favicon.png"
          alt="cosuno"
        />
      )}
      <Options>
        <Option to="/companies" matches={matches.toString()}>
          Companies
        </Option>
        <Option to="/about" matches={matches.toString()}>
          About
        </Option>
      </Options>
    </Root>
  );
};

export default Header;

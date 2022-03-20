import React from "react";
import Lottie from "react-lottie";
import { ReactComponent as Logo } from "../../assets/cosuno.svg";
import animationData from "./../../assets/cosuno.json";
import { LogoContainer, Root, Title } from "./styles";

const HomePage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Root>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <Title>
        The leading platform for procurement and subcontractor management in the
        construction industry.
      </Title>
      <Lottie options={defaultOptions} width={"70%"} />
    </Root>
  );
};

export default HomePage;

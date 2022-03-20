import React from "react";
import { Root } from "./styles";
const About = () => {
  return (
    <Root
      dangerouslySetInnerHTML={{
        __html:
          "<iframe src='https://www.cosuno.de/en/about-us/' width='100%' height='100%'/>",
      }}
    />
  );
};

export default About;

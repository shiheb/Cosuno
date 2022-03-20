import { Link } from "react-router-dom";
import styled from "styled-components";
export const Root = styled.div`
  height: calc(100% - 75px);
  overflow: auto;
  width: 100%;
  display: grid;
  place-items: center;
`;
export const LogoContainer = styled(Link)`
  width: 100%;
  display: grid;
  place-items: center;
`;

export const Title = styled.h3`
  color: #001c4b;
  font-weight: 900;
  text-align: center;
  padding: 0 5%;
`;

import { Link } from "react-router-dom";
import styled from "styled-components";
export const Root = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  align-items: center;
  background: white;
  border-radius: 30px;
`;

export const SmallIcon = styled.img`
  padding-left: 10px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: auto;
  padding: 8px;
`;

export const Options = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Option = styled(Link)`
  padding: ${(props) => (props.matches === "true" ? "0 20px" : "0 5px")};
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(36, 81, 178);
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &: hover {
    background-color: rgb(36, 81, 178, 0.8);
    color: white;
    border-radius: 30px;
  }
`;

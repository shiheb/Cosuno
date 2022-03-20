import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
`;
export const CompaniesLength = styled.h5`
  color: #001c4b;
`;

export const Header = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 30px;
  align-items: center;
  margin-bottom: 20px;
`;

export const CardContainer = styled.div`
  width: 100%;
  display: grid;
  height: auto;
  grid-gap: 1rem;
  min-width: 300px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

export const NoData = styled.div`
  display: grid;
  place-items: center;
  height: 50vh;
  font-size: 36px;
`;

export const BodyLayout = styled.div`
  display: ${(props) => (props.matches ? "grid" : "flex")};
  ${(props) =>
    props.matches
      ? `grid-template-columns: 1fr 200px`
      : `flex-direction: column-reverse;`};
  gap: 14px;
`;

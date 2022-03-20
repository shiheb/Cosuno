import styled from "styled-components";
export const Root = styled.div``;

export const CardFilter = styled.div`
  background-color: white;
  padding: 20px;
  height: auto;
  border-radius: 30px;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;
`;

export const FilterTitle = styled.h4`
  color: rgb(36, 81, 178, 0.8);
`;

export const Specialties = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
`;

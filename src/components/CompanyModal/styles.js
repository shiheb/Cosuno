import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 5px;
`;

export const ModalItem = styled.div`
  width: 350px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 30px;
`;
export const ModalWrapper = styled.div`
  max-width: 80vw;
  max-height: 80vh;
  width: auto;
`;

export const RightSide = styled(ModalItem)`
  padding: 0 12px;
`;

export const Specialties = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 6px;
`;

export const SpecialtyText = styled.div`
  border-radius: 30px;
  color: white;
  background-color: #2672ff;
  font-size: 14px;
  padding: 4px 10px;
`;
export const DetailsItem = styled.h4`
  margin: 15px 0;
`;

export const CityDetailText = styled(SpecialtyText)`
  background-color: #007a78;
  align-self: start;
`;

export const CloseButton = styled.div`
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  position:relative;
  top:-15px;
&:hover,
&:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
`;

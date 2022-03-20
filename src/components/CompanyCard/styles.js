import styled from "styled-components";
export const BackgroundImg = styled.img`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  overflow: hidden;
  &:hover {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    opacity: 0.8;
  }
`;

export const Card = styled.div`
  background-color: rgb(249, 249, 249);
  width: 100%;
  height: 100%;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;
  border-radius: 30px;
  overflow: hidden;
  padding-bottom: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    transform: scale(1.04);
    background-color: rgb(141, 190, 134, 0.4);
    cursor: pointer;
  }
`;
export const ImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;
export const CardItem = styled.div`
  display: grid;
  place-items: center;
`;
export const BodyItem = styled.div`
  padding: 7px 9px 9px 9px;
`;

export const CityText = styled.div`
  float: right;
  color: white;
  background-color: #007a78;
  text-align: center;
  border-radius: 30px;
  font-size: 14px;
  padding: 0 6px;
`;

export const CardFooter = styled(BodyItem)`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  &:hover {
    cursor: pointer;
  }
`;
export const DetailsButton = styled.div`
  font-size: 12px;
`;

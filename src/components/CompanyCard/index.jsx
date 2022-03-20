import React, { useState } from "react";
import CompanyModal from "./../CompanyModal";
import {
  BackgroundImg,
  BodyItem,
  Card,
  CardFooter,
  CardItem,
  CityText,
  DetailsButton,
  ImageWrapper,
} from "./styles";

const CompanyCard = ({ item }) => {
  const { id, city, name, specialties } = item;
  const imageData = "https://placekitten.com/200/";
  const imageUrl = `${imageData}${300 + id}`;
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Card onClick={toggleModal}>
      <div>
        <ImageWrapper>
          <BackgroundImg src={imageUrl} alt={name} />
        </ImageWrapper>
        <BodyItem>
          <h5>{name}</h5>
        </BodyItem>
      </div>
      <CardFooter>
        <CardItem>
          <DetailsButton onClick={toggleModal}>Read more</DetailsButton>
        </CardItem>
        <CityText>{city}</CityText>
      </CardFooter>
      <CompanyModal
        isOpen={isOpen}
        toggleModal={toggleModal}
        imageUrl={imageUrl}
        name={name}
        specialties={specialties}
        city={city}
      />
    </Card>
  );
};

export default CompanyCard;

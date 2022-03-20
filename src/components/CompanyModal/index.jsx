import React from "react";
import Modal from "react-modal";
import { BackgroundImg } from "./../CompanyCard/styles";
import {
  CityDetailText,
  CloseButton,
  DetailsItem,
  ModalContainer,
  ModalItem,
  ModalWrapper,
  RightSide,
  Specialties,
  SpecialtyText,
} from "./styles";
Modal.setAppElement("#root");
const CompanyModal = ({
  isOpen,
  toggleModal,
  imageUrl,
  name,
  specialties,
  city,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      contentLabel="My dialog"
      className="mymodal"
      overlayClassName="myoverlay"
      closeTimeoutMS={500}
    >
      <ModalWrapper>
        <CloseButton onClick={toggleModal}>&times;</CloseButton>
        <ModalContainer>
          <ModalItem>
            <BackgroundImg src={imageUrl} alt={name} />
          </ModalItem>
          <RightSide>
            <h1>{name}</h1>
            <DetailsItem>Specialties:</DetailsItem>
            <Specialties>
              {specialties.map((item, idx) => (
                <SpecialtyText key={idx}>{item.toUpperCase()}</SpecialtyText>
              ))}
            </Specialties>
            <DetailsItem>City:</DetailsItem>
            <CityDetailText>{city.toUpperCase()}</CityDetailText>
          </RightSide>
        </ModalContainer>
      </ModalWrapper>
    </Modal>
  );
};

export default CompanyModal;

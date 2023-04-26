import {
  GalleryItem,
  GalleryItemImage,
} from 'components/ImageGalleryItem/ImageGalleryItem.styled';
import { ModalItem } from 'components/Modal/Modal';
import Modal from 'react-modal';
import React from 'react';

export const ImageGalleryItem = ({ smallImage, bigImage }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <GalleryItem>
      <GalleryItemImage src={smallImage} alt="" onClick={openModal} />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        contentLabel="Photo Modal"
        ariaHideApp={false}
      >
        <ModalItem bigImage={bigImage} />
      </Modal>
    </GalleryItem>
  );
};

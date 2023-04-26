import { Overlay, ModalPhoto } from 'components/Modal/Modal.styled';

export function ModalItem({ bigImage }) {
  return (
    <Overlay>
      <ModalPhoto>
        <img src={bigImage} alt="" />
      </ModalPhoto>
    </Overlay>
  );
}

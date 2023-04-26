import { Overlay, ModalPhoto} from 'components/Modal/Modal.styled';

export const Modal = ({bigImage}) => {

    return (
      <Overlay>
        <ModalPhoto>
          <img src={bigImage} alt="" />
        </ModalPhoto>
      </Overlay>
    );
}
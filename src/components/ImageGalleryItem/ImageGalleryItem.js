import {
  GalleryItem,
  GalleryItemImage,
} from 'components/ImageGalleryItem/ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal'

export const ImageGalleryItem = ({ smallImage, bigImage }) => {
  return (
    <GalleryItem>
      <GalleryItemImage src={smallImage} alt="" />
      <Modal bigImage={bigImage} />
      {console.log(this.state.isLoading)}
    </GalleryItem>
  );
};
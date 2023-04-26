import {
  GalleryItem,
  GalleryItemImage,
} from 'components/ImageGalleryItem/ImageGalleryItem.styled';

export const ImageGalleryItem = ({ smallImage, bigImage }) => {
  return (
    <GalleryItem>
      <GalleryItemImage src={smallImage} alt="" />
    </GalleryItem>
  );
};
import { Gallery } from 'components/ImageGallery/ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ photos }) => {
  return (
    <Gallery>
      {photos.map(photo => (
        <ImageGalleryItem
          key={photo.id}
          smallImage={photo.webformatURL}
          bigImage={photo.largeImageURL}
        />
      ))}
    </Gallery>
  );
};

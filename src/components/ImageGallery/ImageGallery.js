import { Gallery } from 'components/ImageGallery/ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

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

ImageGallery.propTypes = {
  photos: PropTypes.array,
}
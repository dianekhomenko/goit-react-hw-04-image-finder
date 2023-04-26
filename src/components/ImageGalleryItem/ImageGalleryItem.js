export const ImageGalleryItem = ({ props: { key, smallImage, bigImage } }) => {
  return (
    <li key={key}>
      <img src={smallImage} alt="" />
    </li>
  );
};
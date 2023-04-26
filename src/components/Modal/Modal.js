import PropTypes from 'prop-types';

export function ModalItem({ bigImage }) {
  return (
    <div>
      <img src={bigImage} alt="" />
    </div>
  );
}

ModalItem.propTypes = {
  bigImage: PropTypes.string,
}
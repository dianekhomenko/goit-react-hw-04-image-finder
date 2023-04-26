import { Load } from 'components/Button/Button.styled'
import PropTypes from 'prop-types'

export const Button = ({ onLoad }) => {
  return (
    <Load type="button" onClick={onLoad}>
      Load more
    </Load>
  );
};

Button.propTypes = {
  onLoad: PropTypes.func,
}
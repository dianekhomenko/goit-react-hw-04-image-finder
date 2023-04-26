import {Load} from 'components/Button/Button.styled'

export const Button = ({ onLoad }) => {
  return (
    <Load type="button" onClick={onLoad}>
      Load more
    </Load>
  );
};
import PropTypes from 'prop-types';
import { ContactText, ButtonDelete, ContactsBox } from './Contact.styled';

export const Contact = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <ContactsBox>
      <ContactText>
        {name}: {number}
      </ContactText>
      <ButtonDelete onClick={() => onDelete(id)}>Delete</ButtonDelete>
    </ContactsBox>
  );
};

Contact.propTypes = {
  // options: PropTypes.array.isRequired,
  contacts: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
};
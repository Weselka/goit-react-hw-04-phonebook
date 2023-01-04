import PropTypes from 'prop-types';
import { Contact } from 'components';
import { BoardContacts, ContactsItem } from './ContactList.styled';

export const ContactList = ({ items, onDelete }) => {
  return (
    <BoardContacts>
      {items.map(item => {
        return (
          <ContactsItem key={item.id}>
            <Contact contact={item} onDelete={onDelete}></Contact>
          </ContactsItem>
        );
      })}
    </BoardContacts>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};

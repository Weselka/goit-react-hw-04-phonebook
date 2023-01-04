import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { useLocalStorage } from '../../hooks/useLocalStorage';
import {
  Heading,
  Container,
  Section,
  ContactForm,
  ContactList,
  Filter,
} from 'components';

const LS_KEY = 'contacts';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useLocalStorage(LS_KEY, initialContacts);
  const [filter, setFilter] = useState('');

  const addContact = data => {
    console.log(data);
    const presence = contacts.some(contact => contact.name === data.name);
    console.log(presence);
    if (presence) {
      Notify.warning(`${data.name} is already in contacts.`);
      return;
    }

    setContacts(contacts => [{ ...data, id: nanoid() }, ...contacts]);
  };

  const deleteContact = contactId => {
    setContacts(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  const changesFilter = e => {
    setFilter(e.currentTarget.value);
  };

  console.log(contacts);

  const getVisibleContacts = () => {
    const normalized = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalized)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <Container>
      <Heading marginBottom="50px" textAlign="center">
        Phonebook
      </Heading>
      <Section>
        <ContactForm onSubmit={addContact} />
      </Section>
      <Section title={'Contacts'}>
        <Filter value={filter} onChange={changesFilter}></Filter>
        {contacts.length > 0 && (
          <ContactList
            items={visibleContacts}
            onDelete={deleteContact}
          ></ContactList>
        )}
      </Section>
    </Container>
  );
};
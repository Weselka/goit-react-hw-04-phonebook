import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import {
  Heading,
  Container,
  Section,
  ContactForm,
  ContactList,
  Filter,
} from 'components';

const LS_KEY = 'contacts';

export class App extends Component {
  static defaultProps = {
    initialContacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem(LS_KEY);
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts !== null) {
      return this.setState({ contacts: parsedContacts });
    }

    this.setState({
      contacts: this.props.initialContacts,
    });

    //     this.setState({
    //       contacts:
    //         parsedContacts !== null
    //           ? parsedContacts
    //           : this.props.initialContacts,
    // })
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
  }

  addContact = data => {
    console.log(data);
    const presence = this.state.contacts.some(
      contact => contact.name === data.name
    );
    console.log(presence);
    if (presence) {
      Notify.warning(`${data.name} is already in contacts.`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [{ ...data, id: nanoid() }, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changesFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalized = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalized)
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <Heading marginBottom="50px" textAlign="center">
          Phonebook
        </Heading>
        <Section>
          <ContactForm onSubmit={this.addContact} />
        </Section>
        <Section title={'Contacts'}>
          <Filter value={filter} onChange={this.changesFilter}></Filter>
          {contacts.length > 0 && (
            <ContactList
              items={visibleContacts}
              onDelete={this.deleteContact}
            ></ContactList>
          )}
        </Section>
      </Container>
    );
  }
}

// export class App extends Component {
//   static defaultProps = {
//     initialContacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//   };

//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem(LS_KEY);
//     const parsedContacts = JSON.parse(contacts);

//     if (parsedContacts !== null) {
//       return this.setState({ contacts: parsedContacts });
//     }

//     this.setState({
//       contacts: this.props.initialContacts,
//     });

//     //     this.setState({
//     //       contacts:
//     //         parsedContacts !== null
//     //           ? parsedContacts
//     //           : this.props.initialContacts,
//     // })
//   }

//   componentDidUpdate(_, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
//     }
//   }

//   addContact = data => {
//     const presence = this.state.contacts.some(
//       contact => contact.name === data.name
//     );
//     if (presence) {
//       Notify.warning(`${data.name} is already in contacts.`);
//       return;
//     }

//     this.setState(({ contacts }) => ({
//       contacts: [{ ...data, id: nanoid() }, ...contacts],
//     }));
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   changesFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   getVisibleContacts = () => {
//     const { contacts, filter } = this.state;
//     const normalized = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalized)
//     );
//   };

//   render() {
//     const { contacts, filter } = this.state;
//     const visibleContacts = this.getVisibleContacts();

//     return (
//       <Container>
//         <Heading marginBottom="50px" textAlign="center">
//           Phonebook
//         </Heading>
//         <Section>
//           <ContactForm onSubmit={this.addContact} />
//         </Section>
//         <Section title={'Contacts'}>
//           <Filter value={filter} onChange={this.changesFilter}></Filter>
//           {contacts.length > 0 && (
//             <ContactList
//               items={visibleContacts}
//               onDelete={this.deleteContact}
//             ></ContactList>
//           )}
//         </Section>
//       </Container>
//     );
//   }
// }

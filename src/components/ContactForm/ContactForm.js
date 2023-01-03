import { useState } from 'react';
// import PropTypes from 'prop-types';
import { Label, Form, Input, Button } from './ContactForm.styled';

const initValue = {
  name: '',
  number: '',
};

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // const [value, setValue] = useState(initValue);

  // const handleChange = e =>
  //   setValue(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleChange = e => {
    const { name, value } = e.target;
    
    switch (name) {
      case 'name':
        setName(value);
        console.log('case name');
        break;
      case 'number':
        setNumber(value);
        console.log('case number');
        break;
      default:
        console.log('case default');
        return;
    }
  };

//   const handleSubmit = e => {
//   const { name, value } = e.target;
//   e.preventDefault();
//   console.log(e.target.name.value);
//     onSubmit({ name:name, value:value });
//   // setValue(initValue);
// };


  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.number.value);
    const { name, value } = e.target;

    // onSubmit(e.target.name.value);
    // onSubmit(e.target.number.value);

    console.log({ name, value });

    switch (name) {
      case 'name':
        onSubmit(value);
        setName('');
        console.log('case name')
        break;
      case 'number':
        onSubmit(value);
        setNumber('');
        console.log('case number');
        break;
      default:
        console.log('case default');
        return;
    }

    // const { name, number } = e.target.value;
    // onSubmit(value);
    // setState({ name: '', number: '' });
  };

// const { name, number } = value;

  return (
    <Form
    onSubmit={handleSubmit}
    >
      <Label>
        Name
        <Input
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

// static propTypes = {
//     contacts: PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }),
// };

// export class ContactForm extends Component {
//   static propTypes = {
//     contacts: PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }),
//   };

//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     const { name, number } = this.state;

//     return (
//       <Form onSubmit={this.handleSubmit}>
//         <Label>
//           Name
//           <Input
//             value={name}
//             onChange={this.handleChange}
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </Label>
//         <Label>
//           Number
//           <Input
//             value={number}
//             onChange={this.handleChange}
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </Label>
//         <Button type="submit">Add contact</Button>
//       </Form>
//     );
//   }
// }

import React, { Component } from 'react';
// import { get, save, remove } from 'components/services/localStorage';
import ContactsList from 'components/ContactsList/ContactsList';
import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import shortid from 'shortid';
import s from './App.module.css';

class App extends Component {
  state = {
    contacts: [],

    filter: '',
  };

  save = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      return null;
    }
  };

  get = key => {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      return null;
    }
  };

  componentDidMount() {
    const parsedContacts = this.get('contacts');
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state.contacts) {
      this.save('contacts', this.state.contacts);
    }
  }

  formSubmitHandler = data => {
    const { contacts } = this.state;
    const normalizedName = data.name
      .toLocaleLowerCase()
      .split(' ')
      .join('');
    const ableToAddName = contacts.some(
      contact =>
        contact.name
          .toLocaleLowerCase()
          .split(' ')
          .join('') === normalizedName
    );
    const normalizedNumber = data.number.split('-').join('');
    const ableToAddNumber = contacts.some(
      contact => contact.number.split('-').join('') === normalizedNumber
    );
    if (ableToAddName || ableToAddNumber) {
      alert(
        `${ableToAddName ? data.name : data.number} is already in contacts`
      );
      return;
    }
    this.addContact(data);
  };

  addContact = contactNew => {
    const contactAdd = {
      id: shortid.generate(),
      name: contactNew.name,
      number: contactNew.number,
    };
    this.setState(prevState => ({
      contacts: [contactAdd, ...prevState.contacts],
    }));
  };

  deleteContact = e => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.id !== e.target.id
      ),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    if (filter) {
      const normalizedFilter = filter.toLocaleLowerCase().trim();
      return contacts.filter(contact =>
        contact.name.toLocaleLowerCase().includes(normalizedFilter)
      );
    }
    return contacts;
  };

  render() {
    const { filter } = this.state;
    const vizibleContacts = this.getVisibleContacts();

    return (
      <div className={s.wrapper}>
        <h1 className={s.title}>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <h1 className={s.title}>Contacts</h1>
        <Filter value={filter} onChangeFilter={this.changeFilter} />
        <ContactsList
          vizibleContacts={vizibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
export default App;

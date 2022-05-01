export const getContacts = state => state.phonebook.contacts;

export const getFilterContact = state => state.phonebook.filterContact;

// Для компонента ContactList сложный селектор
export const getVisibleContacts = state => {
  console.log(state.phonebook.filterContact);
  const allContacts = getContacts(state);
  const filterContact = getFilterContact(state);
  if (!filterContact) {
    return allContacts;
  }
  const normWord = filterContact.toLocaleLowerCase().trim();
  return [...allContacts].filter(contact =>
    contact.name.toLocaleLowerCase().includes(normWord)
  );
};

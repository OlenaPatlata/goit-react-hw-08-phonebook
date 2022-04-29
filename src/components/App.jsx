import React, { useState, useEffect } from 'react';
import { useSelector, connect } from 'react-redux';
import ContactsList from 'components/ContactsList/ContactsList';
import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import shortid from 'shortid';
import { get, save } from 'serviсes/localStorage';
import actions from 'redux/phonebook/phonebook-actions';
import s from './App.module.css';

const App = ({ contacts, filterContact, addContact, onDeleteContact }) => {
  const formSubmitHandler = data => {
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
    const contactNew = {
      id: shortid.generate(),
      name: data.name,
      number: data.number,
    };
    addContact(contactNew);
  };

  const getVisibleContacts = () => {
    if (!filterContact) {
      return;
    }
    const normWord = filterContact.toLocaleLowerCase().trim();
    const findContact = [...contacts].filter(contact =>
      contact.name.toLocaleLowerCase().includes(normWord)
    );
    return findContact;
  };

  const vizibleContacts = getVisibleContacts();

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Phonebook</h1>
      <Form onSubmit={formSubmitHandler} />
      <h1 className={s.title}>Contacts</h1>
      <Filter />
      <ContactsList vizibleContacts={vizibleContacts || contacts} />
    </div>
  );
};
const mapStateToProps = state => {
  return {
    contacts: state.phonebook.contacts,
    filterContact: state.phonebook.filterContact,
  };
};

const mapDispatchToProps = dispatch => ({
  addContact: contactNew => dispatch(actions.myActionAddContact(contactNew)),
  onDeleteContact: id => dispatch(actions.myActionDeleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

// ___________________________Example useState_________
// const App = () => {
//   // const [counter, setCounter] = useState(0);
//   const [counter, setCounter] = useState(() => randomCounter());
//   const [state, setState] = useState({ title: 'Counter', date: new Date() });

//   function increment() {
//     setCounter(prev => prev + 1);
//   }
//   function decrement() {
//     setCounter(prev => prev - 1);
//   }
//   function randomCounter() {
//     console.log('++++++++');
//     return Math.trunc(Math.random() * 20);
//   }
//   function updateTitle() {
//     setState(prev => {
//       return { ...prev, title: 'newTitle' };
//     });
//   }

//   return (
//     <div>
//       <h1>Счетчик{counter}</h1>
//       <p></p>
//       <button type="button" onClick={increment}>
//         Добавить
//       </button>
//       <button type="button" onClick={decrement}>
//         Убрать
//       </button>
//       <button type="button" onClick={updateTitle}>
//         Change
//       </button>
//       <pre>{JSON.stringify(state, null, 2)}</pre>
//     </div>
//   );
// };

// export default App;

// ___________________________Example useEffect_________

// const App = () => {
//   const [type, setType] = useState('users');
//   const [data, setData] = useState([]);
//   const [pos, setPos] = useState({ x: 0, y: 0 });
//   const changeUsers = () => {
//     setType('users');
//   };
//   const changeTodos = () => {
//     setType('Todu');
//   };
//   const changePost = () => {
//     setType('Пости');
//   };

//   const changeTitle = e => {
//     setType(e.target.name);
//   };
//   const mouseMoveHandler = event => {
//     setPos({ x: event.clientX, y: event.clientY });
//   };
//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/${type}`)
//       .then(response => response.json())
//       .then(json => setData(json));
//   }, [type]);

//   useEffect(() => {
//     console.log('ComponentDidMount');
//     window.addEventListener('mousemove', mouseMoveHandler);

//     return window.removeEventListener('mousemove', mouseMoveHandler);
//   }, []);

//   return (
//     <div>
//       <h1>Ресурс: {type}</h1>
//       <button name="users" type="button" onClick={changeTitle}>
//         Користувачі
//       </button>
//       <button name="todos" type="button" onClick={changeTitle}>
//         Todos
//       </button>
//       <button name="posts" type="button" onClick={changeTitle}>
//         Пости
//       </button>
//       <pre>{JSON.stringify(pos, null, 2)}</pre>;
//     </div>
//   );
// };

// export default App;

// ___________________________Example useContext_________

// const App = () => {
//   const [value, setValue] = useRef('');
//   return <div></div>;
// };

// export default App;

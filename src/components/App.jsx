import React, { useState, useEffect, useRef } from 'react';
// import { get, save, remove } from 'components/services/localStorage';
import ContactsList from 'components/ContactsList/ContactsList';
import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import shortid from 'shortid';
import s from './App.module.css';
import PropTypes from 'prop-types';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filterWords, setFilterWords] = useState('');

  const save = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      return null;
    }
  };

  const get = key => {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      return null;
    }
  };

  useEffect(() => {
    const parsedContacts = get('contacts');
    if (parsedContacts) {
      console.log(parsedContacts);
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    save('contacts', contacts);
  }, [contacts]);

  const formSubmitHandler = data => {
    const normalizedName = data.name
      .toLocaleLowerCase()
      .split(' ')
      .join('');
    console.log(normalizedName);
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
    addContact(data);
  };

  const addContact = contactNew => {
    const contactAdd = {
      id: shortid.generate(),
      name: contactNew.name,
      number: contactNew.number,
    };
    setContacts(prev => [...prev, contactAdd]);
    console.log(contacts);
  };

  const deleteContact = e => {
    const smolllList = contacts.filter(contact => contact.id !== e.target.id);
    setContacts(smolllList);
  };

  function changeFilter(e) {
    return (() => setFilterWords(e.currentTarget.value))();
  }

  const getVisibleContacts = () => {
    console.log(filterWords);
    if (!filterWords) {
      return;
    }
    const normWord = filterWords.toLocaleLowerCase().trim();
    console.log(contacts);
    const findContact = [...contacts].filter(contact =>
      contact.name.toLocaleLowerCase().includes(normWord)
    );
    console.log('~ ~ getVisibleContacts ~ findContact', findContact);

    // setContacts([...findContact]);
    // return findContact;
  };

  const vizibleContacts = getVisibleContacts();

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Phonebook</h1>
      <Form onSubmit={formSubmitHandler} />
      <h1 className={s.title}>Contacts</h1>
      <Filter value={filterWords} onChangeFilter={changeFilter} />
      <ContactsList
        vizibleContacts={contacts}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};
export default App;

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

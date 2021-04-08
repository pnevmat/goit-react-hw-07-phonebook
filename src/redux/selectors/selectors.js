import {createSelector} from '@reduxjs/toolkit'

const getAllContacts = state => {
  console.log("State in getAllContacts", state);
  return state.contacts
};

const getFilter = state => state.filter;

// const contactsFinderHandler = (contacts, filter) => {

//     if (filter !== '') {
//       const foundContacts = contacts.filter(contact => 
//         contact.name.toLowerCase().includes(filter));
//       return foundContacts
//     };
// };

const contactsFinderHandler = createSelector([getAllContacts, getFilter], (contacts, filter) => {
  console.log("Contacts in createSelector", contacts);
  console.log("Filter in createSelector", filter);
  console.log("Type of Filter", typeof filter);
  if (contacts.length > 0) {
    const foundContacts = contacts.filter(contact => 
      contact.name.toLowerCase().includes(filter));
    return foundContacts
  };
  // return contacts;
});

export default {getAllContacts, getFilter, contactsFinderHandler};
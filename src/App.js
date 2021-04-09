import React, {Component} from 'react';
// import {connect} from 'react-redux';

// import onStoreUpdate from './redux/operations/storeUpdateOperation';
// import onAddContact from './redux/operations/addContactOperation';
// import onDeleteContact from './redux/operations/deleteContactOperation';
// import onSearchContacts from './redux/actions/searchContacts';

// import selectors from './redux/selectors/selectors';

import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

import './App.css';

class PhoneBook extends Component {

  // componentDidMount() {
  //   const {onStoreUpdate} = this.props;

  //     onStoreUpdate();
  // };

  // componentDidUpdate(prevProps, prevState) {
    
  // };

  onStateUpdate = (obj) => {
    const {onAddContact} = this.props;

    if (this.props.contacts.find(contact => contact.name === obj.name)) {
      alert(`${obj.name}is alredy in contacts`);

    } else {
      onAddContact(obj);
    };
  };

  // contactsFinderHandler = () => {
  //   const {contacts} = this.props;

  //   if (this.props.filter !== '') {
  //     const foundContacts = contacts.filter(contact => 
  //       contact.name.toLowerCase().includes(this.props.filter));
  //     return foundContacts
  //   };
  // };

  render() {
    const {onFilterContacts, contacts, filter, foundContacts, onDeleteContact} = this.props;
    // const foundContacts = selectors.contactsFinderHandler(contacts, filter);
    return (
      <section className="section">
        <h1>Phone Book</h1>
        <ContactForm onSubmit={this.onStateUpdate}/>
        <h2>Contacts</h2>
        <Filter onChange={onFilterContacts} />
        {contacts.length !== 0 &&
          <ContactList 
          foundContacts={foundContacts}
          state={contacts}
          filter={filter}
          onDeleteContact={onDeleteContact}
        />}
        
      </section>
    )
  }
};

// const mapStateToProps = state => ({
//   contacts: selectors.getAllContacts(state),
//   filter: selectors.getFilter(state)
// });

// const mapDispatchToProps = dispatch => ({
//   onStoreUpdate: contacts => dispatch(onStoreUpdate(contacts)),
//   onAddContact: contact => dispatch(onAddContact(contact)),
//   onDeleteContact: contactId => dispatch(onDeleteContact(contactId)),
//   onSearchContacts: event => dispatch(onSearchContacts(event))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);

export default PhoneBook;
import { Component } from 'react';
import {connect} from 'react-redux';

import onStoreUpdate from '../operations/storeUpdateOperation';
import onAddContact from '../operations/addContactOperation';
import onDeleteContact from '../operations/deleteContactOperation';
import onFilterContacts from '../operations/filterContactsOperation';

import selectors from '../selectors/selectors';

import PhoneBook from '../../App';

class PhoneBookContainer extends Component {
    componentDidMount() {
        const {onStoreUpdate} = this.props;
      
        onStoreUpdate();
    };

    render() {
        const {
            onAddContact,
            onDeleteContact,
            onFilterContacts,
            contacts,
            foundContacts,
            filter
        } = this.props;
        return <PhoneBook 
            contacts={contacts}
            filter={filter}
            onAddContact={onAddContact}
            onDeleteContact={onDeleteContact}
            onFilterContacts={onFilterContacts}
            foundContacts={foundContacts}
        />
    };
};

const mapStateToProps = state => ({
    contacts: selectors.getAllContacts(state),
    filter: selectors.getFilter(state),
    foundContacts: selectors.contactsFinderHandler(state)
  });
  
  const mapDispatchToProps = dispatch => ({
    onStoreUpdate: contacts => dispatch(onStoreUpdate(contacts)),
    onAddContact: contact => dispatch(onAddContact(contact)),
    onDeleteContact: contactId => dispatch(onDeleteContact(contactId)),
    onFilterContacts: event => dispatch(onFilterContacts(event))
  })

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBookContainer);
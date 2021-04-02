import {createReducer} from '@reduxjs/toolkit';

import onStoreUpdate from '../actions/didMountStoreUpdate';
import onAddContact from '../actions/addContact';
import onDeleteContact from '../actions/deleteContact';

const contactsReducer = createReducer([], {
    [onStoreUpdate]: (_, {payload}) => [...payload],
    [onAddContact]: (state, {payload}) => [...state, payload],
    [onDeleteContact]: (state, {payload}) => state.filter(contact => contact.id !== payload)
});

export default contactsReducer;
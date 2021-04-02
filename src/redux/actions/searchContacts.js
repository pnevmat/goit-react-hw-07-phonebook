import {createAction} from '@reduxjs/toolkit';

const onSearchContacts = createAction('search/contacts', ({target}) => ({
    payload: target.value.toLowerCase()
}));

export default onSearchContacts;
import {createReducer} from '@reduxjs/toolkit';

import onSearchContacts from '../actions/searchContacts';

const filterReducer = createReducer('', {
    [onSearchContacts]: (_, {payload}) => payload
});

export default filterReducer;
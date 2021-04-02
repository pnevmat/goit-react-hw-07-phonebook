import {createAction} from '@reduxjs/toolkit';
import shortid from 'shortid';

const onAddContact = createAction('add/contact', ({name, number}) => ({
    payload: {
        id: shortid.generate(),
        name: name,
        number: number
    }
}));

export default onAddContact;
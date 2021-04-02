import axios from 'axios';
import actions from '../actions/addContact';

axios.defaults.baseURL = 'http://localhost:4040';

const onAddContact = text => dispatch => {

    const contact = {...text}

    dispatch(actions.addContactRequest());

    axios.post('/contacts', contact)
        .then(({data}) => dispatch(actions.addContactSuccess(data)))
        .catch(error => dispatch(actions.addContactError(error)));
};

export default onAddContact;
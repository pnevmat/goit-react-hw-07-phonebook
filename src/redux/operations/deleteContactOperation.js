import axios from 'axios';
import actions from '../actions/deleteContact';

axios.defaults.baseURL = 'http://localhost:4040';

const onDeleteContact = id => dispatch => {

    dispatch(actions.deleteContactRequest());

    axios.delete(`/contacts/${id}`)
        .then(({data}) => dispatch(actions.deleteContactSuccess(id)))
        .catch(error => dispatch(actions.deleteContactError(error)))
};

export default onDeleteContact;
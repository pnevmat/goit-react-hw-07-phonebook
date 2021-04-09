import onSearchContacts from '../actions/searchContacts';

const onFilterContacts = text => dispatch => {
    dispatch(onSearchContacts(text));
};

export default onFilterContacts;
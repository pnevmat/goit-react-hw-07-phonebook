import axios from 'axios';
import actions from '../actions/didMountStoreUpdate';

axios.defaults.baseURL = 'http://localhost:4040';

const onStoreUpdate = text => dispatch => {

    dispatch(actions.updateStoreRequest());

    axios.get('/contacts')
    .then(({data}) => {
        return dispatch(actions.updateStoreSuccess(data))})
    .catch(error => {
        return dispatch(actions.updateStoreError(error))})
}

export default onStoreUpdate;
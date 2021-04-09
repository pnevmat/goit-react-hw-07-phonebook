import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import PhoneBook from './App';
import PhoneBookContainer from './redux/containers/container';

import 'modern-normalize/modern-normalize.css';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <PhoneBookContainer />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';

import Application from './Application';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Application />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

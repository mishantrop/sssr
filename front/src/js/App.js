import React from 'react';
import { Provider } from 'react-redux';
import console from 'console';
import configureStore from './store/configureStore';
import Counter from './Counter';
import HeaderClient from './HeaderClient';
import { fetchClient } from './store/actions/client';

const store = configureStore();
store.dispatch(fetchClient());

export default class App extends React.Component {
  render() {
    const user = {
      name: 'Client rendered name',
    };

    return(
      <Provider store={store}>
        <div className="app">
          <HeaderClient user={user} />
          <Counter count={100} />
        </div>
      </Provider>
    );
  };
}

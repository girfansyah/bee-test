import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import { HomeView } from './components';
import './App.css';

import store from './redux';

function App() {
  return (
    <ReduxProvider store={store}>
      <HomeView />
    </ReduxProvider>
  );
}

export default App;

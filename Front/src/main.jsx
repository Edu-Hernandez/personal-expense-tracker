import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './assets/styles/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(

  //Provider permite que todos los componentes usen el store de redux
  <Provider store={store}>
    <App />
  </Provider>

);

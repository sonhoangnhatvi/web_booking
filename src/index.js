import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import "@fortawesome/fontawesome-svg-core/styles.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

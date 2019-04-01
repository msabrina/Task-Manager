import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import App from './App';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

//import redux
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import rootReducer from './reducers';

// const store = createStore(rootReducer);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();

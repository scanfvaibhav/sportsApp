import React from 'react';
import ReactDOM from 'react-dom';
import './views/css/styles.css';
import './views/css/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

// Store
import store from './store/index';

// Views
import { App, ErrorDisplay } from './views/Components/index';
import { Home, Dashboard, Main} from './views/Containers/index';


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Route exact path='/' component={Home}/>
        <Route exact path='/current-weather' component={Dashboard}/>
        <Route exact path='/error' component={ErrorDisplay}/>
        <Route exact path='/main' component={Main}/>
        
      </App>
    </Router>
  </Provider>
  , document.getElementById('root'));

registerServiceWorker(); // eslint-disable-line no-undef

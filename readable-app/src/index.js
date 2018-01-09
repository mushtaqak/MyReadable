import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css'
import './styles/index.css';

import registerServiceWorker from './registerServiceWorker';
import ReadableApp from './components/app';
import { store } from './store';


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <ReadableApp />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();

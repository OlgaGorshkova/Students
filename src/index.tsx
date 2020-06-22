import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './app';
import { configureStore } from './redux/store/confugureStore';

export const store = configureStore();

ReactDOM.render(  
    <App />, 
    document.getElementById('root') as HTMLElement,
);

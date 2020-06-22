import * as React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { history } from '../redux/store/confugureStore';
import { Content } from './routing';

import { store } from '..';

export class View extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>                    
                    {Content}
                </ConnectedRouter>
            </Provider>
        );
    }
}

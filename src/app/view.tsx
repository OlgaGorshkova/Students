import * as React from 'react';
// import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'connected-react-router';

// import { history } from '../redux/store/configureStore';
import { Content } from './routing';

// import { store } from '..';

// export class View extends React.Component {

//     render() {
//         return (
//             <Provider store={store}>
//                 <ConnectedRouter history={history}>
//                     <div className='root-element'>
//                         {Content}
//                         </div>
//                 </ConnectedRouter>
//             </Provider>
//         );
//     }
// }

import { BrowserRouter } from 'react-router-dom';

export class View extends React.Component {

    render() {
        return (
            <BrowserRouter>
                {Content}
            </BrowserRouter>
        );
    }
}

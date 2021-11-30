import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './Component/App/App';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
// import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                {/*<Router> */}
                <App />
                {/* </Router>*/}
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

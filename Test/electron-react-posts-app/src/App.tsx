import React from 'react';
import store, {history} from './core/stores/configure-store';
import {Provider} from 'react-redux';
import {Router} from 'react-router';
import MainPage from './components/mainPage';

const App = () => (
    <Provider store={store}>
        <Router history={history}>
            <MainPage/>
        </Router>
    </Provider>
);

export default App;

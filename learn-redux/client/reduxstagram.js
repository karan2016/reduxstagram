// let's go!
import Raven from 'raven-js';
Raven
    .config('https://7a76096adb674b26808bf0f756802ec5@sentry.io/150619')
    .install();
import React from 'react';
import {render} from 'react-dom';

//import css
import css from './styles/style.styl';

//import components
import App from './components/App';
import Single from './components/Single.js';
import PhotoGrid from './components/PhotoGrid.js';

//import react-router
import {Router, Route, IndexRoute, BrowserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store, {history} from './store';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>

);

render(router, document.getElementById('root'));

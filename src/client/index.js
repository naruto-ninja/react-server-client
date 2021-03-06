import React from 'react';
import ReactDOM from 'react-dom';
// import Home from '../containers/Home/index';

import { BrowserRouter } from 'react-router-dom';
import Routes from '../Routes';

const App = () => {
    return <BrowserRouter>
        {Routes}
    </BrowserRouter>
}

ReactDOM.hydrate(<App />, document.getElementById('root'));

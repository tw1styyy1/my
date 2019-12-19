import * as React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

import {Header} from '../header/header';
import './App.scss';

const App: React.FC = () => {

  return (
    <Router>

        <Route>
            <Header/>
        </Route>

    </Router>
  );

}

export {App};

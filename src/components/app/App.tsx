import React from 'react';
import {Header} from "../header/header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.scss';

const App: React.FC = () => {

    return (
        <Router>
            <Header/>
        </Router>
    );

};

export {App};

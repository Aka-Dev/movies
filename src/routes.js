import React from 'react';
import { Router, Route } from 'react-router';
import App from './components/App';
import Preview from './components/Preview';
import NotFoundPage from './components/NotFoundPage';


const routes = (props) => (
    <Router {...props}>
        <Route path="/" component={App} />
        <Route path="/movies/:id" component={Preview}/>
        <Route path="*" component={NotFoundPage}/>
    </Router>
);

export default routes;
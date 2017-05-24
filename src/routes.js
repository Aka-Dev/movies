import React from 'react';
import { Router, Route } from 'react-router';
import App from './components/App';
import Preview from './components/Preview';
import NotFoundPage from './components/NotFoundPage';


const routes = (props) => (
    <Router {...props}>
        <Route path="/" component={App} keyApi="47e27219ee335b95988455c455c809f8" url="https://api.themoviedb.org/3/" />
        <Route path="/movies/:id" component={Preview}/>
        <Route path="*" component={NotFoundPage}/>
    </Router>
);

export default routes;
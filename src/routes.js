import React from 'react';
import { Router, Route } from 'react-router';
import MainLayout from './components/MainLayout';
import App from './components/App';
import Movies from './components/Movies/Movies';
import Popular from './components/Movies/Popular';
import TopRated from './components/Movies/TopRated';
import Upcoming from './components/Movies/Upcoming';
import Preview from './components/Preview';
import NotFoundPage from './components/NotFoundPage';


const routes = (props) => (
    <Router {...props}>
        <Route component={MainLayout}>
            <Route path="/" component={App} keyApi="47e27219ee335b95988455c455c809f8" url="https://api.themoviedb.org/3/"/>
            <Route component= {Movies} keyApi="47e27219ee335b95988455c455c809f8" url="https://api.themoviedb.org/3/">
                <Route path="movies/popular" component={Popular} />
                <Route path="movies/top_rated" component={TopRated} />
                <Route path="movies/upcoming" component={Upcoming} />
            </Route>
            <Route path="movies/:id" component={Preview}/>
            <Route path="*" component={NotFoundPage}/>
        </Route>
    </Router>
);

export default routes;
import MainPage from "./MainPage";
import NewsPage from "./NewsPage";
import About from "./About";
import React from 'react'
import Privacy from './Privacy';
import TermsOfUse from "./TermsOfUse";
import BlogPage from './BlogPage';
import NotFoundPage from './NotFoundPage';
import { Switch, Route, Redirect } from "react-router-dom";

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/news" exact component={NewsPage} />
            <Route path="/about" exact component={About} />
            <Route path="/blog" exact component={BlogPage} />
            <Route path="/privacy" exact component={Privacy} />
            <Route path="/terms" exact component={TermsOfUse} />
            <Route path="/404" component={NotFoundPage} status={404} />
            <Redirect to="/404" status={404} />
        </Switch>
    )
}

export default Routes;
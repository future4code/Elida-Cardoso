import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage"
import SingUpPage from "../pages/SingUpPage/SingUpPage"
import FeedPage from "../pages/FeedPage/FeedPage"
import PostDetailsPage from "../pages/PostDetailsPage/PostDetailsPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/login"}>
                    <LoginPage />
                </Route>

                <Route exact path={"/singup"}>
                    <SingUpPage />
                </Route>

                <Route exact path={"/"}>
                    <FeedPage />
                </Route>

                <Route exact path={"/post/:id"}>
                    <PostDetailsPage />
                </Route>

                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router
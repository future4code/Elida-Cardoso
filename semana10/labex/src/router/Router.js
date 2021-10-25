import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "../pages/HomePage"
import ListTripsPage from "../pages/ListTripsPage"
import ApplicationFormPage from "../pages/ApplicationFormPage"
import LoginPage from "../pages/LoginPage"
import AdminHomePage from "../pages/AdminHomePage"
import TripDetailsPage from "../pages/TripDetailsPage"
import CreateTripPage from "../pages/CreateTripPage"

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: #FEF9EF;
        /* font-family: 'Georama', sans-serif; */
    }
`

export const Router = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Switch>
                <Route exact path={"/"}>
                    <HomePage />
                </Route>

                <Route exact path={"/trips/list"}>
                    <ListTripsPage />
                </Route>

                <Route exact path={"/trips/application"}>
                    <ApplicationFormPage />
                </Route>

                <Route exact path={"/login"}>
                    <LoginPage />
                </Route>

                <Route exact path={"/admin/trips/list"}>
                    <AdminHomePage />
                </Route>

                <Route exact path={"/admin/trips/create"}>
                    <CreateTripPage />
                </Route>

                <Route exact path={"/admin/trips/:id"}>
                    <TripDetailsPage />
                </Route>
                <Route>
                    <div> Erro 404 - Página não encontrada</div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import FeedPage from '../screens/FeedPage'
import LoginPage from '../screens/LoginPage'
import PostPage from '../screens/PostPage'
import SignUpPage from '../screens/SignUpPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login">
                    <LoginPage />
                </Route>
                <Route exact path="/sign-up">
                    <SignUpPage />
                </Route>
                <Route exact path={["/", "/home"]}>
                    <FeedPage />
                </Route>
                <Route exact path="/post/:postId">
                    <PostPage />
                </Route>
                <Route>
                    <p>Página não encontrada.</p>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router
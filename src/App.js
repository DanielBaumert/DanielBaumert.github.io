import logo from './logo.svg';
import {HashRouter, Route, Switch } from 'react-router-dom';
import * as pages from './pages';
import { default as Nav } from "./static-components/Nav";
import { RootContainer } from "./components";

function App() {
    return (
        <HashRouter>
            <RootContainer>
                <Nav/>
                <Switch>
                    <Route path="/" exact component={pages.Home}/>
                    <Route path="/x11/XCreateWindow" component={pages.XCreateWindow}/>
                </Switch>
            </RootContainer>
        </HashRouter>
    );
}

export default App;

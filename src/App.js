import logo from './logo.svg';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import * as pages from './pages';
import { default as Nav } from "./static-components/Nav";
import { RootContainer } from "./components";

function App() {
    return (
        <BrowserRouter>
            <RootContainer>
                <Nav/>
                <Switch>
                    <Route path="/" exact component={pages.Home}/>
                    <Route path="/x11/screen" component={pages.XScreen}/>
                </Switch>
            </RootContainer>
        </BrowserRouter>
    );
}

export default App;

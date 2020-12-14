import logo from './logo.svg';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import * as pages from './pages';
import { default as Nav } from "./static-components/Nav";

function App() {
    return (
        <BrowserRouter>
            <div className="columns has-large-gaps is-gapless-mobile">
                <Nav/>
                <Switch>
                    <Redirect exact from="" to="/" />
                    <Route path="/" exact component={pages.Home}/>
                    <Route path="/x11/screen" component={pages.XScreen}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;

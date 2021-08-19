import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import { Footer, Header } from "./Components";
import { TestPage } from "./Pages";

function App() {
    return (
        <>
            <div className="wrapper h-full">
                <Header />
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => <Redirect to="/home" />}
                    />
                    <Route path="/home" component={TestPage} />
                    <Route path="/login" component={TestPage} />
                    <Route path="/signup" component={TestPage} />
                    <Route component={Error} />
                </Switch>
                <Footer />
            </div>
        </>
    );
}

export default App;

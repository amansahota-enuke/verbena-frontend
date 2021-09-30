import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import { Footer, Header, Error, ScrollToTop } from "./Components";
import { AboutPage, HomePage, ServicesPage, FAQPage } from "./Pages";

function App() {
    return (
        <>
            <div className="wrapper h-full">
                <Header />
                <ScrollToTop>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => <Redirect to="/home" />}
                        />
                        <Route path="/home" component={HomePage} />
                        <Route path="/services" component={ServicesPage} />
                        <Route path="/about" component={AboutPage} />
                        <Route path="/faq" component={FAQPage} />
                        <Route component={Error} />
                    </Switch>
                </ScrollToTop>
                <Footer />
            </div>
        </>
    );
}

export default App;

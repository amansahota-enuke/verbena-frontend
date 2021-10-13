import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import { Footer, Header, Error, ScrollToTop } from "./Components";
import Confirmation from "./Layouts/Confirmation";
import { AboutPage, HomePage, ServicesPage, FAQPage, WhyVerbenaPage } from "./Pages";

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
                        <Route path="/Why-Verbena" component={WhyVerbenaPage} />
                        <Route component={Error} />
                    </Switch>
                </ScrollToTop>
                <Footer />
                <Confirmation />
            </div>
        </>
    );
}

export default App;

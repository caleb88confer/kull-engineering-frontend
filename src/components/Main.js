import Header from "./Header";
import {Route, Switch} from "react-router-dom";
// import components
import Services from "./Services";
import Social from './Social';
import StudioServices from "./StudioServices";
import Pricing from "./Pricing";
import WorkExamples from "./WorkExamples";
import ServiceDescription from "./ServiceDescription";
import StudioExamples from "./StudioExamples";
import About from "../pages/About";
import Contact from "../pages/Contact";


function Main ({location, setLocation}) {
    return (
        <main>
            <Header 
            setLocation={setLocation}
            location={location}
            />
            <Switch>
                <Route exact path="/">
                    <Services setLocation={setLocation} />
                    <Social />
                </Route>
                <Route path="/studio">
                    <StudioServices />
                    <WorkExamples />
                    <Pricing/>
                </Route>
                <Route path="/acoustics">
                    <ServiceDescription />
                    <StudioExamples />
                    <Pricing />
                </Route>
                <Route path="/live">
                    <ServiceDescription />
                    <Pricing />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/recording">

                </Route>
                <Route path="/mixing">

                </Route>
                <Route path="/mastering">

                </Route>
                <Route path="/production">

                </Route>
                <Route path="/dkwyn">

                </Route>
            </Switch>
        </main>
    );
}

export default Main;
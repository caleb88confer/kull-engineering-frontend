import Header from "./Header";
import {Route, Switch} from "react-router-dom";
// import components
import Services from "./Services";
import Social from './Social';
import StudioServices from "./StudioServices";
import WorkExamples from "./WorkExamples";
import AcousticsDescription from "./AcousticsDescription";
import LiveDescription from "./LiveDescription";
import StudioExamples from "./StudioExamples";
import About from "../pages/About";
import Contact from "../pages/Contact";
import LiveLocation from "./LiveLocation";

function Main ({location, setLocation, setContactSubject, contactSubject}) {
    return (
        <main>
            <Header 
            contactSubject={contactSubject}
            setContactSubject={setContactSubject}
            setLocation={setLocation}
            location={location}
            />
            <Switch>
                <Route 
                exact path="/"
                >
                    <Services setLocation={setLocation} />
                    <Social />
                </Route>

                <Route path="/studio">
                    <StudioServices 
                    setLocation={setLocation} 
                    setContactSubject={setContactSubject}
                    />
                    <WorkExamples />
                </Route>

                <Route path="/acoustics">
                    <AcousticsDescription />
                    <StudioExamples setLocation={setLocation} />
                </Route>

                <Route path="/live">
                    <LiveLocation setLocation={setLocation} />
                    <LiveDescription />
                </Route>

                <Route path="/about">
                    <About setLocation={setLocation} />
                </Route>

                <Route path="/contact">
                    <Contact 
                    setContactSubject={setContactSubject}
                    contactSubject={contactSubject}
                    setLocation={setLocation}/>
                </Route>

               
            </Switch>
        </main>
    );
}

export default Main;
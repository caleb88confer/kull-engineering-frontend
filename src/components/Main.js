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
import LiveLocation from "./LiveLocation";
import RecordingLocation from '../location-setters/RecordingLocation';
import MixingLocation from '../location-setters/MixingLocation';
import MasteringLocation from '../location-setters/MasteringLocation';
import ProductionLocation from '../location-setters/ProductionLocation';
import DkwynLocation from '../location-setters/DkwynLocation';

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
                    <StudioServices setLocation={setLocation} />
                    <WorkExamples />
                    <Pricing/>
                </Route>

                <Route path="/acoustics">
                    <ServiceDescription />
                    <StudioExamples setLocation={setLocation} />
                    <Pricing />
                </Route>

                <Route path="/live">
                    <LiveLocation setLocation={setLocation} />
                    <ServiceDescription />
                    <Pricing />
                </Route>

                <Route path="/about">
                    <About setLocation={setLocation} />
                </Route>

                <Route path="/contact">
                    <Contact 
                    contactSubject={contactSubject}
                    setLocation={setLocation}/>
                </Route>

                <Route path="/recording">
                    <RecordingLocation setLocation={setLocation} />
                </Route>

                <Route path="/mixing">
                    <MixingLocation setLocation={setLocation} />
                </Route>

                <Route path="/mastering">
                    <MasteringLocation setLocation={setLocation} />
                </Route>

                <Route path="/production">
                    <ProductionLocation setLocation={setLocation} />
                </Route>

                <Route path="/dkwyn">
                    <DkwynLocation setLocation={setLocation} />
                </Route>
            </Switch>
        </main>
    );
}

export default Main;
import Header from "./Header";

function Main ({location}) {
    return (
        <div>
            <Header 
            location={location}
            />
            <h1>Main</h1>
        </div>
    );
}

export default Main;
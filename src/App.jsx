import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";
// import Test from "./components/Test.jsx";

const App = () => {
    return (
        <div>
            <Header />
            {/* <Test /> */}
            <main>
                <CoreConcepts />
                <Examples />
            </main>
        </div>
    );
};

export default App;

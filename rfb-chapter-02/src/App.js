import { useEffect, useState } from "react";

function Hello() {
    // 3개 다 같은 내용
    /*
    function byFn() {
        console.log("Destroyed! :(");
    }
    const hiFn = () => {
        console.log("Created! :)");
        return byFn;
    };
    useEffect(hiFn, []); 
    */
    /*
    useEffect(function () {
        console.log("hi :)");
        return function () {
            console.log("bye :(");
        };
    }, []);
    */
    /*
    useEffect(() => {
        console.log("hi :)");
        return () => console.log("bye :(");
    }, []);
    */
    return <h1>Hello</h1>;
}

function App() {
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev);
    return (
        <div>
            {showing ? <Hello /> : null}
            <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
        </div>
    );
}

export default App;

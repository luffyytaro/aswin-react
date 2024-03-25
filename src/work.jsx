import {  useState } from "react";

function Work() {
    const [count1, setCount1] = useState(0);
    console.log("app component");


    function decre(){
        if(count1>0){
            setCount1(count1-1);
        }
    }
    return (
        <main>
            <h2>{count1}</h2>
            <button onClick={() => setCount1(count1+1)}>click</button>
            <button onClick={decre}>click</button>
        </main>
    );
}
export default Work;
















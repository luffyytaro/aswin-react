import Counter2 from "./counter";
import {  useState } from "react";


function Memo() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    console.log("app component");
    return(
        <main>
            <h2>{count1}</h2>
            <button onClick={() => setCount1(count1+1)}>click</button>
            <Counter2 count2={count2} />
            <button onClick={() => setCount2(count2+1)}>click</button>
        </main>
    );
}
export default Memo;








            //useMemo

// function Memo () {
//     const [count, setCount] = useState(0);
//     let value = useMemo(() =>{
//         return complexCalc()
//     },[]);
//     return(
//         <main>
//             {value}
//             --Hello
//             <h2>{count}</h2>
//             <button onClick={() => setCount(count+1)}>click</button>
//         </main>
//     );
// }
//     export default Memo;

//     function complexCalc() {
//         let i;
//         console.log("starting calc");
//         for(i=0; i<400000000; i++){
//             i=i
//         }
//         console.log("calc completed");
//         return i;
//     }
import { useEffect, useRef, useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    const [apiData, setApiData] = useState({}); 
    const myRef = useRef();
    useEffect(() => {
        fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then(data =>  {
            console.log("inside fetch");
            setApiData(data);
        });
    },[]);
    console.log("app");
    return(
        <main>
            <h1 ref={myRef}>{count}</h1>
            <button onClick={()=> setCount(count+1)}>incr</button>
            <div>{apiData?.products?.map((item, index) =>(
                <section key={index}>
                    <h3>{item.brand}</h3>
                    <img src={item.thumbnail} alt="" />
                    <h2>{item.title}</h2>
                    <h2>${item.price}</h2>
                </section>

            ))}</div>
        </main>
    );
}

export default App;










           //USE-STATE//

// function App() {
//     const [count, setCount] = useState(0);
//     console.log("app component");
//     return(
//         <main>
//             <h1>{count}</h1>
//             <button onClick={() =>setCount(count+1)}>incr</button>
//         </main>
//     );
// }
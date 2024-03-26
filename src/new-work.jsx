import { useEffect, useState } from "react";



function Dummy() {
    
    const [apiData, setApiData] = useState({});
    useEffect(() => {
        fetch("https://dummyjson.com/products/category/smartphones")
            .then(res => res.json())
            .then(data => {
                console.log("inside fetch");
                setApiData(data);
            })
    }, []);
    console.log("app");
    return (
        <main>
            <div>{apiData?.products?.map((item, index) => (
                <section key={index}>
                    <h1>{item.brand}</h1>
                    <img src={item.thumbnail} alt="" />
                    <h2>{item.title}</h2>
                    <h3>Price: ${item.price}</h3>
                </section>

            ))}</div>
        </main>
    );
}
export default Dummy;
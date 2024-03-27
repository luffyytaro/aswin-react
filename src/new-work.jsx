import { useEffect, useState } from "react";




function Dummy() {

    const [apiData, setApiData] = useState({});
    useEffect(() => {
        fetch("https://dummyjson.com/products/category/laptops")
            .then(res => res.json())
            .then(data => {
                console.log("inside fetch");
                setApiData(data);
            })
    }, []);
    console.log("app");
    return (


        <main>
            <header>

                <div className="headers">

                    <div className="left-section">

                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Contact Us</a>
                    </div>

                    <div className="right-section">
                        <input type="text" placeholder="search" />
                        <input type="submit" />
                    </div>

                </div>

            </header>

            <div className="content">{apiData?.products?.map((item, index) => (
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
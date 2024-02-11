import { useState, useEffect } from "react";

function Products() {

    const [products, setProducts] = useState([]);


    async function fetchProducts() {
        const resposne = await fetch(`https://dummyjson.com/products?limit=10`);
        const data = await resposne.json()
        setProducts(data.products)
    }
    useEffect(()=>{
        fetchProducts()

    }, [])
    
    return (
        <>
            <h1 className='title'>Products</h1>
            <p>This is a products page</p>
            <div className="products">
                {
                    products && products.length > 0
                    ?   products.map(product => 
                            <div className="item" key={product.id}>
                                <img className="image" src={product.thumbnail} alt={product.title} />
                                <h3 className="title">{ product.title }</h3>
                            </div>
                        )
                    : <p>No data found</p>
                }

            </div>
        </>
    );
}

export default Products

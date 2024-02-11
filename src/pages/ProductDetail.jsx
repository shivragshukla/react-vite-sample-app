import { useState, useEffect } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";

function ProductDetail() {

    const [product, setProduct] = useState(null);
    const { id } = useParams()

    async function fetchProduct() {
        const resposne = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await resposne.json()
        setProduct(data)
    }
    useEffect(()=>{
        fetchProduct()
    }, [id])
    
    return (
        <>
            <h1 className='title'>Product</h1>
            <Link to="../" relative="path" > &larr; Back to all products</Link>
            <div>
                {
                    product
                    ?   <>
                        <div className="product">
                           <img className="image" src={product.thumbnail} alt={product.title} />
                           <div className="detail">
                               <h3 className="title">{ product.title }</h3>
                               <p><b>Category: </b>{ product.category }</p>
                               <p><b>Brand: </b>{ product.brand }</p>
                               <p><b>Rating: </b>{ product.rating }</p>
                               <p><b>Price: </b>{ product.price }</p>
                               <p className="description">{ product.description }</p>
                           </div>
                           </div>
                           <div className="product-extra">
                                <div className="nav">
                                    <NavLink 
                                        to="."
                                        end
                                        className={({isActive}) => isActive ? 'active-item' : null}
                                    >Stock</NavLink>
                                    <NavLink 
                                        to="images"
                                        className={({isActive}) => isActive? 'active-item' : null}
                                    >Images</NavLink>
                                </div>
                                <div className="product-wrapper">
                                    <Outlet context={product} />
                                </div>
                            
                           </div>
                        </>
                    :   <p>No data found</p>
                }
            </div>
        </>
    );
}

export default ProductDetail

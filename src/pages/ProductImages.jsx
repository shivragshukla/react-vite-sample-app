import { useOutletContext } from "react-router-dom";

function ProductImages() {
    const { images } = useOutletContext()
    return (
      <>
        <div className="product-images">
            {
                images && images.length > 0 
                ?   images.map((image, i) =>
                        <div key={i}>
                            <img src={image} />
                        </div>
                    )                    
                : null
            }
        </div>
      </>  
    )
}

export default ProductImages;

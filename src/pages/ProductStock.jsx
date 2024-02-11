import { useOutletContext } from "react-router-dom";

function ProductStock() {

    const { stock, rating, discountPercentage, price } = useOutletContext()

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Stock</th>
                        <th>Rating</th>
                        <th>Discount</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{ stock }</td>
                        <td>{ rating }</td>
                        <td>{ discountPercentage }</td>
                        <td>{ price }</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default ProductStock;

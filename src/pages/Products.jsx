import axios from "axios"
import { useState, useEffect } from "react"
export default function Products() {
    const productsApiUrl = 'https://fakestoreapi.com/products'
    const [product, setProduct] = useState([])

    function getProducts() {
        axios.get(productsApiUrl)
            .then(response => {
                const productsList = response.data
                setProduct(productsList)
            })
            .catch(error => console.error(error))
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="container p-4">
            <h1>I nostri Articoli</h1>
            <div className="row g-3">
                {
                    product.map(item =>
                        < div className="col-12 col-md-6 col-lg-4" key={item.id}>
                            <div className="card h-100">
                                <div className="card-img-top p-3">
                                    <img className="product-img" src={item.image} alt="" />
                                </div>
                                <div className="card-body">
                                    <h3>{item.title}</h3>
                                    <span>{item.price}&euro;</span>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div >
        </div>
    )
}
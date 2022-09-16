import { IProduct } from "../../module"
import SelfProduct from "./SelfProduct"

const Products = ({ isAuth }: { isAuth: boolean }) => {
    const products: IProduct[] = JSON.parse(localStorage.products)
    console.log(products);



    return (
        <div className="page">
            <div className="Products">
                <span className="Products_title">Our Products</span>
                <div className="Products_catalog">
                    {
                        products.map((product) =>
                            <SelfProduct product={product} key={product.productId} isAuth={isAuth} />
                        )
                    }

                </div>
            </div>
        </div>
    )
}
export default Products
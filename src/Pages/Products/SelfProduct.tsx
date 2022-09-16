import { FaRegHeart } from 'react-icons/fa';
import { MdProductionQuantityLimits } from 'react-icons/md';
import React from 'react'
import { ISelfProduct } from '../../module';
import CheckOut from '../../Components/CheckOut/CheckOut';
import { useNavigate } from 'react-router-dom';
console.log(localStorage);



const SelfProduct: React.FC<ISelfProduct> = ({ product, isAuth }) => {

    const navigate = useNavigate()

    const addToBasket = () => {
        {isAuth ? console.log(Number(product.productId)) : navigate('/sign-in')}
    }

    return (
        <div className="SelfProduct">
            <div className="productImage" style={{ backgroundImage: `url('${product.productImg}')` }}>
            </div>
            <span className="productName">{product.productName}</span>
            <span className="productTitle">{product.productTitle}</span>
            <div className="productInformation">
                <span>
                    <span className='one'>${product.productPtice}</span>
                    <span className='two'>${product.productPtice - 30}</span>
                </span>
                <div className="buttons">
                    <button> <MdProductionQuantityLimits /> </button>
                    <button onClick={addToBasket}> <FaRegHeart /> </button>
                </div>
            </div>
        </div>
    )
}
export default SelfProduct;
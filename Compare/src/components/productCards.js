import {useState} from 'react'
import {productList} from '../data/productList.js'
import {useDispatch, useSelector} from "react-redux"
import {addProduct, product} from "../stores/productManage"

function ProductCards() {
    const {products} = useSelector(state => state.product)

    const dispatch = useDispatch();

    const handleAddProduct = (index) =>{
        dispatch(addProduct(index))
    }

    return (
        <div className='row'>
            {productList.map((item, index)=>{
               return(
                <div key={index} className='col-md-3'>
                    <div className='product-main'>
                        <img src={item.link}/> 
                        <div className={products.includes(index) ? 'product-overlay-selected' : 'product-overlay'}></div>
                        <div className='add-product' onClick={()=> handleAddProduct(index)}>{products.includes(index) ? 'Remove':'Compare'}</div> 
                        <div className='product-info'>
                            <span>${item.price}</span>
                            <span>{item.name}</span>
                            <p>{item.description}</p>
                        </div>
                    </div>
                </div>
                );
               
            })}
        </div>
    )
}

export default ProductCards

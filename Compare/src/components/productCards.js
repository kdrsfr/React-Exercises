import {useState} from 'react'
import {products} from '../data/products.js'
import {useDispatch, useSelector} from "react-redux"
import {addProduct} from "../stores/productManage"

function ProductCards() {
    const dispatch = useDispatch();


    const handleAddProduct = (index) =>{
        dispatch(addProduct(index))
        products.selected = !products.selected;
        console.log(products.selected)
        {products.map((item, index)=>{
            console.log(products.selected)
         })}
    }

    return (
        <div className='row'>
            {products.map((item, index)=>{
               return(
                <div key={index} className='col-md-3'>
                    <div className='product-main'>
                        <img src={item.link}/> 
                        <div className='product-overlay'></div>
                        <div className='add-product' onClick={()=> handleAddProduct(index)}>{ products.selected ? 'Remove':'Compare'}</div> 
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

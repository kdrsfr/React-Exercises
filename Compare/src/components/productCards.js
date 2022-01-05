import React from 'react'
import {products} from '../data/products.js'

function productCards() {
    // console.log(products)
    return (
        <div className='row'>
            {products.map((item)=>{
               return(
                <div className='col-md-3 '>
                    <div className='product-main'>
                        <img src={item.link}/> 
                        <div className='product-overlay'></div>
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

export default productCards

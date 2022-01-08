import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {productList} from '../data/productList.js'



function CompareTable() {
    const {products} = useSelector(state => state.product)


    return (
        <div className={products.length > 1 ? "row compare-main" : "notVisible" }>
            <div className='col-12 mt-5'>
                <table className='table'  style={{backgroundColor: "white"}}>
                    <thead className='thead-def text-center'>
                        <tr>
                            <th></th>
                            {productList.map((item)=>{
                                if(products.includes(item.id)){
                                    return <th>{item.name}</th>
                                }
                            })}
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='price'>
                            <th scope="row">Price</th>
                            {productList.map((item)=>{
                                if(products.includes(item.id)){
                                    return  <td className='text-center'>${item.price}</td>
                                }
                            })}
                            
                        </tr>
                        <tr className='colors'>
                            <th scope="row">Colors</th>
                            {productList.map((item)=>{
                                if(products.includes(item.id)){
                                    return (
                                    <td className='text-center'>
                                        {item.colors.map((color, index) =>
                                            <span key={index} className={color}></span>
                                        )}
                                    </td>
                                    );
                                }
                            })}
                        </tr>
                        <tr className='condition'>
                            <th scope="row ">Condition</th>
                            {productList.map((item)=>{
                                if(products.includes(item.id)){
                                    return  <td className={item.condition ? "item-fresh  text-center" :  "item-frozen  text-center" }>{item.condition ? 'Fresh' : 'Frozen'}</td>
                                }
                            })}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CompareTable

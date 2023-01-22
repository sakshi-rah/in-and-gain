import React, { useState } from 'react'
import swal from 'sweetalert'
import "./FoodItemCard.css"

function FoodItemCard({ imgUrl, price, description, title, category }) {
    const [quantity, setQuantity] = useState(1)

    async function addToList() {
        const listObject = {
            name: title,
            price: price,
            quantity: quantity
        }

        const existingList = JSON.parse(localStorage.getItem('list')) || []

        existingList.push(listObject)

        localStorage.setItem('list', JSON.stringify(existingList))

        await swal({
            title: "Added to List",
            icon: "success",
        })
        window.location.reload()
    }

    return (
        <div className='col-md-4 '>
            <div className='sweet-item-card'>

                < div className='sweet-food-card-body'>
                    <div>
                        <img src={imgUrl} alt='' className='food-card-img' />
                    </div>

                    <div className='sweet-card-sub-container'>
                        <h4 className='text-uppercase'>{title}</h4>
                        <p>{description || title}</p>

                        <div className='price-qnt-container'>
                            <div className='price '>
                                <span> Price : {price}₹</span>
                            </div>

                            <div className='quantity-btn-container '>
                                <span className='qnt-btn' onClick={(e) => { setQuantity(quantity - 1) }}>{"<"}</span>
                                <span className='qnt-text'>{quantity}</span>
                                <span className='qnt-btn' onClick={(e) => { setQuantity(quantity + 1) }}>{">"}</span>
                            </div>
                        </div>

                        <div>
                            <button type="button" className='btn-add-to-list' onClick={addToList}>Add To List</button>
                            <button type="button" className='btn-shop' onClick={addToList}>Shop</button>
                        </div>

                    </div>
                </div>


            </div>

        </div >
    )
}

export default FoodItemCard
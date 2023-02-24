import React, { useState } from 'react'
import swal from 'sweetalert'
import "./FoodItemCard.css"

function FoodItemCard({ imgUrl, price, description, title, category }) {
    const [quantity, setQuantity] = useState(1)

    async function addToList() {
        const listObject = {
            name: title,
            price: price,
            quantity: quantity,
            imgUrl: imgUrl
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

    function decrement(){

        let value = 1
        if(quantity <= value){
            value = 2
        }
        else
        {
            value = quantity
        }
        setQuantity(value - 1)
    }

    return (
        <div className='col-lg-4 col-md-6 col-sm-12 card-container'>
            <div className='sweet-item-card'>

                < div className='sweet-food-card-body'>

                    <div>
                        <img src={imgUrl} alt='' className='food-card-img' />
                    </div>

                    <div className='sweet-card-sub-container'>

                        <h6 className='text-uppercase fw-bold'>{title}</h6>
                        <p className='description'>{description}</p>
                        <hr />

                        <div className='price-qnt-container'>

                            <div className='price text-success'>
                                <span> Price : {price}₹</span>
                            </div>

                            <div className='quantity-btn-container '>
                                <span className='qnt-btn left' onClick={decrement}>{"<"}</span>
                                <span className='qnt-text'>{quantity}</span>
                                <span className='qnt-btn right' onClick={(e) => { setQuantity(quantity + 1) }}>{">"}</span>
                            </div>
                        </div> 

                        <div>
                            <button type="button" className='btn-add-to-list btn btn-danger' onClick={addToList}>Add To List</button>

                        </div>

                    </div>
                </div>

            </div>

        </div >
    )
}

export default FoodItemCard
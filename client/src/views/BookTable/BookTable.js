import React, { useState, useEffect } from 'react'
import axios from "axios"
import swal from 'sweetalert'
import { currentUser } from './../../util/currentUser'
import Navbar from '../../components/Navbar/Navbar'
import "./BookTable.css"
import table from "../../images/table-img.png"

function BookTable() {

    const [availabletables, setAvailableTables] = useState([])

    useEffect(() => {
        const fetchTables = async () => {
            const response = await axios.get("/availableTables")
            console.log(response.data.data);
            localStorage.setItem('table', JSON.stringify(response.data.data))
            setAvailableTables(response.data.data)
        }
        fetchTables()
    }, [])

    async function bookTable() {
        console.log('Table Booked');
        const response = await axios.post('/bookTable', {
            tableNumber: localStorage.getItem("table"),
            userID: currentUser._id
        })
        localStorage.setItem('')
        console.log(response.data.success);
    }

    return (
        <div className='tables row'>

            <Navbar />

            <p className='text-center fs-1'>Available Tables</p>

            {
            availabletables &&
                availabletables?.map((availabletable) => {
                    return (
                        <div className='col-md-4'>
                            <p className='available-table'> 🍽 Table : {availabletable.tableNumber}
                                <img className='table-img' alt='' src={table} />
                                <button type='button' className='btn btn-danger btn-table' onClick={bookTable}>Book Table</button>
                            </p>
                            <br />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default BookTable
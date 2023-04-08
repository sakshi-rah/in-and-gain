import React, { useState, useEffect } from 'react'
import axios from "axios"
import swal from 'sweetalert'
import { currentUser } from './../../util/currentUser'
import { loginRequired } from '../../util/loginRequired'
import Navbar from '../../components/Navbar/Navbar'
import "./BookTable.css"
import table from "../../assets/table-img.png"
import Footer from "../../components/Footer/Footer"

function BookTable() {

    const [availabletables, setAvailableTables] = useState([])

    useEffect(() => {
        const fetchTables = async () => {
            const response = await axios.get("/availableTables")
            console.log(response.data.data);
            setAvailableTables(response.data.data)
        }
        fetchTables()
        loginRequired()
    }, [])

    async function bookTable(tableNumber) {
        console.log(tableNumber);
        const response = await axios.post('/bookTable', {
            tableNumber: tableNumber,
            userID: currentUser._id
        })

        if (response.data.success) {
            await swal({
                icon: 'success',
                title: "Booked Table",
                text: response.data.message,
            })
            localStorage.setItem('bookedTable', JSON.stringify(response.data.data))
            window.location.reload()
        }
        else {
            await swal({
                icon: 'error',
                title: "Choose Another Table !",
                text: response.data.message,
            })
            window.location.reload()
        }
    }

    async function unbookTable(tableNumber) {
        const response = await axios.post('/unBookTable', { tableNumber: tableNumber })
        await swal({
            icon: 'success',
            title: "Unbooked Table",
            text: response.data.message,
        })
        localStorage.removeItem('bookedTable')
        window.location.reload()
    }


    return (
        <div className='tables row'>

            <Navbar user={currentUser?.name} />

            <p className='text-center fs-1'>Available Tables</p>

            {
                availabletables &&
                availabletables?.map((availabletable) => {
                    return (
                        <div className='col-md-6 col-lg-3 col-sm-6 col-12'>
                            <p className='available-table'>Table : {availabletable.tableNumber}
                                <img className='table-img' alt='' src={table} />
                                <button type='button' className='btn btn-danger btn-table' onClick={() => { bookTable(availabletable.tableNumber) }}>Book Table</button>
                                <button type='button' className='btn btn-outline-danger btn-table' onClick={() => { unbookTable(availabletable.tableNumber) }}>UnBook Table</button>
                            </p>
                            <br />
                        </div>
                    )
                })
            }
            
            <Footer/>
        </div>
    )
}

export default BookTable
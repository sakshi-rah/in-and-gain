import swal from 'sweetalert'
export async function tableRequired() {
    const bookedSeat = JSON.parse(localStorage.getItem("bookTable"))
    if (!bookedSeat) {
        await swal({
            title: 'Book Table First !',
            text: 'Please Book Table to Continue',
            icon: 'warning',
            buttons: true,
            dangerMode: true
        })
        window.location.href = '/bookTable'
    }
}
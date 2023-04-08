import { currentList } from './currentList'
import swal from "sweetalert"

export async function itemsRequired() {
    if (!currentList) {
        await swal({
            title: 'Items Required',
            text: 'Please Add items to Continue',
            icon: 'warning',
            button: "Ok",
            dangerMode: true
        })
        window.location.href = '/menu'
    }
}
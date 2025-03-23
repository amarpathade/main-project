import Swal from 'sweetalert2'

window.swal = {
    sucess: (message) => Swal.fire({
        title: 'Offer Applied !',
        // text: 'Offer Applied',
        icon: 'success',
        confirmButtonText: 'ok',
    }),
    error: (message) => Swal.fire({
        title: 'Invalid Offer !',
        // text: 'invalid offer !',
        icon: 'error',
        confirmButtonText: 'ok'
    }),
    close: () => Swal.close(),
}
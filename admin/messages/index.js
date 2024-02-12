console.log("Welcome Admin");


const dataTable = $('#dataTable').DataTable({
    responsive: true,
    deferRender: true,
    destroy: true,
    autoWidth: false,
    ajax: {
        url: `https://portfolio-221y.onrender.com/api/v1/message/read/`,
        dataSrc: '',
    },
    columns: [
        { data: "name" },
        { data: "email" },
        {
            data: null,
            render: (row) => {
                return `<span data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="${row.subject}">${row.subject.substring(0, 5)}...</span>`
            }
        },
        {
            data: null,
            render: (row) => {
                return `<span data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="${row.message}">${row.message.substring(0, 5)}...</span>`
            }
        },
        {
            data: null,
            render: (row) => {
                return `<div class="text-center">
                        <button class="btn btn-primary btn-sm view" data-message="${row.name}">view</button>
                        <button class="btn btn-danger btn-sm delete" data-message="${row.name}">delete</button>
                </div>`
            }
        }
    ],
    drawCallback: () => {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    }
})

$(document).on('click', '#refreshMessages', e => {
    dataTable.ajax.reload(null, false)
})

$(document).on('click', '.view', e => {
    let message = $(e.target).data('message')
    fetch(`https://portfolio-221y.onrender.com/api/v1/message/read/${message}`).then(r => {
        return r.json()
    }).then(d => {
        // console.log(d);
        // d[0]
        $('#ModalLabel').html(`${d[0].name} message details :`)
        $('#name').html(d[0].name)
        $('#email').html(d[0].email)
        $('#subject').html(d[0].subject)
        $('#message').html(d[0].message)
    })
    $('#viewMessage').modal('show')
})

$(document).on('click', '.delete', e => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: 'black',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            let message = $(e.target).data('message')
            fetch(`https://portfolio-221y.onrender.com/api/v1/message/delete/${message}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(response => {
                return response.text()
            }).then(data => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: data,
                    showConfirmButton: false,
                    timer: 3000
                })
            }).then(() => {
                dataTable.ajax.reload(null, false)
            })
        } else if (result.isDismissed) {
            Swal.fire({
                position: 'top-end',
                icon: 'warning',
                title: 'Cancelled',
                showConfirmButton: false,
                timer: 3000
            })
        }
    })
})



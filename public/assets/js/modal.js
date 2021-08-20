

$('#hotlist-ul').on('click', 'button', async function(event) {
    event.preventDefault();

    let id = event.target.id
    
    await fetch(`/api/defendant/${id}`, {
        method: 'GET',   
    })
    .then(response => response.json())
    .then((defendant) => {
        if(defendant) {

            $('#modal-parcel-id').replaceWith(`<span id="modal-parcel-id">${defendant.parcel_id}</span>`)
            $('#modal-def-name').replaceWith(`<span id="modal-def-name">${defendant.def_name}</span>`)
            $('#modal-co-def').replaceWith(`<span id="modal-co-def">${defendant.co_def_name}</span>`)
            $('#modal-amount').replaceWith(`<span id="modal-amount">${defendant.amount}</span>`)
            $('#modal-sale-date').replaceWith(`<span id="modal-sale-date">${defendant.sale_date}</span>`)
            $('#modal-address').replaceWith(`<span id="modal-address">${defendant.owner_mail_add}</span>`)
            $('#modal-city-state').replaceWith(`<span id="modal-city-state">${defendant.city_state}</span>`)

            $('#myModal').modal('show');

        } else {
            alert("defendant not found");
        }
    })
});



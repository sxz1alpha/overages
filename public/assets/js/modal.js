

$('#hotlist-ul').on('click', 'button', async function(event) {
    event.preventDefault();

    let id = event.target.id
    
    await fetch(`/api/defendant/${id}`, {
        method: 'GET',   
    })
    .then(response => response.json())
    .then((defendant) => {
        if(defendant) {

            $('#modal-parcel-id').replaceWith(defendant.parcel_id)
            $('#modal-def-name').replaceWith(defendant.def_name)
            $('#modal-co-def').replaceWith(defendant.co_def_name)
            $('#modal-amount').replaceWith(defendant.amount)
            $('#modal-sale-date').replaceWith(defendant.sale_date)
            $('#modal-address').replaceWith(defendant.owner_mail_add)
            $('#modal-city-state').replaceWith(defendant.city_state)

            $('#myModal').modal('show');

        } else {
            alert("defendant not found");
        }
    })

    // if(response.ok) {
    //     let data = response.json()
    //     console.log(data);
    //     let defendant = 'hahahahahahahaha test' //TODO: find parent defendant object in the dom


    // } else {
    // }

});



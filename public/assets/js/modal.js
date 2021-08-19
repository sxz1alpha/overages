
$('#hotlist-ul').on('click', 'button', async function(event) {
    event.preventDefault();

    let id = event.target.id
    
    const response = await fetch(`/api/defendant/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }    
    })

    if(response.ok) {
        let def = response.def_name
        let parcel_id = def.parcel_id
        console.log(parcel_id);
    } else {
        alert(response.statusText)
    }

});



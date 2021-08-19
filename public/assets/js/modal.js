
$('#hotlist-ul').on('click', 'button', async function(event) {
    event.preventDefault();

    let id = event.target.id
    
    const response = await fetch(`/api/defendant/${id}`, {
        method: 'GET',   
    })
    

    if(response.ok) {
        // let data = response.json();
        console.log(response);
        // $('#myModal').modal('show');

    } else {
        alert(response.statusText)
    }

});



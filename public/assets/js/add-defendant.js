async function addDefendant(event) {
    event.preventDefault();

    const parcel_id = document.querySelector('#parcel-id').value.trim();
    const def_name = document.querySelector('#def-name').value.trim();
    const co_def_name = document.querySelector('#co-def').value.trim();
    const amount = document.querySelector('#amount').value.trim();
    const sale_date = document.querySelector('#sale-date').value.trim();
    const owner_mail_add = document.querySelector('#address').value.trim();
    const city_state = document.querySelector('#city-state').value.trim();

    if( parcel_id && def_name && amount && sale_date ) {
        const response = await fetch('/api/defendant', {
            method: 'POST',
            body: JSON.stringify({
                parcel_id,
                def_name,
                amount,
                sale_date,
                co_def_name,
                owner_mail_add,
                city_state
            }),
            headers: { 'Content-Type': 'application/json' }
        })

        if(response.ok) {
            document.location.replace('/hotlist')
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#def-submit').addEventListener('submit', addDefendant);
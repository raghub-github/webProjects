function updateMap() 
{
    fetch("/data.json")
        .then(resp => resp.json())
        .then(rsp => {
            console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;
                // Mark on the map

            });
        })
}
updateMap();
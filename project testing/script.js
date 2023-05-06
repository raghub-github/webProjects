function updateMap() {
    console.log("Updating map with realtime data")
    fetch("data.json")
        .then(responce => responce.json())
        .then(rsp => {
            // console.log(rsp.data)

            submit.addEventListener("click", (e) => {
                e.preventDefault()
                class upper {
                    capitalize(cityOrPin) {
                        return (cityOrPin.charAt(0).toUpperCase() + cityOrPin.substr(1, cityOrPin.length)).trim()
                    }
                }
                let p1 = new upper()
                let newCity = p1.capitalize(cityOrPin.value)  // trim value
                // console.log(newCity)

                let newRsp = rsp.data.filter(function (ele) {
                    return (ele.pincode == newCity) || (ele.city == newCity)
                });
                // console.log(newRsp)

                if (newRsp.length > 0) {
                    newText.innerHTML = `<div class="card">
                    <div class="card-body">
                        <div>
                        <div class="display-5 font-weight-bold text-center textLine" style="font-size: 40px; id=" commonStation">
                            <img src="photos/Z.png" class="img-fluid setup-size" alt="Responsive image">
                            Charging stations in ${newCity} ⠀
                            <div class="spinner-grow text-success" role="status">
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>`
                    let ds1 = document.getElementById("ds")
                    ds1.style.display = "flex"


                } else if (newCity.length <= 0) {
                    newText.innerHTML = ``
                }
                else {
                    newText.innerHTML = `No data found <hr>`
                }

                let imgUrls = [
                    `./photos/im1.png`,
                    `./photos/im2.png`,
                    `./photos/im3.png`,
                    `./photos/im4.png`,
                    `./photos/im5.png`,
                    `./photos/im6.png`,
                    `./photos/im7.png`,
                    `./photos/im8.png`,
                    `./photos/image.png`,
                    `./photos/images.png`,
                    `./photos/walmart.png`,
                    `./photos/img2.png`
                ];
                let randomImg = () => {
                    return imgUrls[Math.floor(Math.random() * imgUrls.length)]
                }
                // console.log(randomImg());

                ihtml = ""
                ihtml2 = ""
                let bgimg = randomImg();
                let c = 0;
                for (item in newRsp) {
                    if (c == 1) {
                        c = 0;
                        bgimg = randomImg();
                    }
                    c++;
                    ihtml += `<div class="card mx-2 my-2 shadow p-3 mb-5 bg-white rounded" style="width: 22rem; height: 36.2rem;">
                      <img src="${bgimg}" class="card-img-top" alt="...">
                      <div class="card-body">
                          <h5 class="card-title font-weight-bold textStyle">Charging Station Name : ${newRsp[item].name}</h5>
                          <h5 class="font-weight-bold textStyle" style="font-size: 17px;">City : ${newRsp[item].city}</h5>
                          <h6 class="font-weight-boldb textStyle">Address : ${newRsp[item].address}</h6>
                          <h6 class="font-weight-bold textStyle">Pincode : ${newRsp[item].pincode}</h6>
                          <h6 class="font-weight-bold textStyle">State : ${newRsp[item].state}</h6>
                          <h6 class="font-weight-bold textStyle">Pricing : ${newRsp[item].pricing}</h6>
                          <h6>
                              <a href="https://www.google.com/maps/place/${newRsp[item].city},+${newRsp[item].state}+${newRsp[item].pincode}/@${newRsp[item].longitude},${newRsp[item].lattitude}" target="_blank" class="btn btn-primary my-4">Visit station</a>
                          </h6>
                      </div>
                  </div>`

                    ihtml2 += `<tr>
                  <td><span id="name" ></span>${newRsp[item].name}</td>
                  <td><span id="address"></span>${newRsp[item].address}</td>
                  <td><span id="pincode"></span>${newRsp[item].pincode}</td>
                  <td><span id="state"></span>${newRsp[item].state}</td>
                  <td><span id="pricing"></span>${newRsp[item].pricing}</td>
                  </tr>`

                    for (item in newRsp) {
                        if (newRsp.length > 0) {
                            document.getElementById("cont1").style.display = "block"
                            document.getElementById("showcdn").style.display = "block"
                        }
                    }
                }

                cardContainer.innerHTML = ihtml
                tdata.innerHTML = ihtml2
                city1.innerHTML = `Table view of all charging station in ${newCity}`
            })


            rsp.data.forEach(element => {
                let latt = element.lattitude;
                let long = element.longitude;
                // Mark on the map
                new mapboxgl.Marker({
                    draggable: false,
                    color: `green`,
                }).setLngLat([long, latt])
                    .addTo(map);
            });
        })
}

updateMap();


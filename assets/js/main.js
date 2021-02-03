/* -_-_-_-_-_-_-_-_-_-_ Draw Blank Map _-_-_-_-_-_-_-_-_-_- */
function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: {lat: 53.383328, lng: -7.5091553},
        mapTypeId: 'satellite'
    });
}

// var accommodation_type = ["Camping", "Caravan Park", "Hotel", "Hostel", "Bed & Breakfast"];
var accommodation_type = ["All Types"];
var region = ["Select"];
var counties = {  
                "Connacht": ["Select", "All Counties"],
                "Leinster": ["Select", "All Counties"],
                "Munster": ["Select", "All Counties"],
                "Ulster": ["Select", "All Counties"],
            }

/* -_-_-_- onLoad Function _-_-_-_ */

    // Loads the first menu for map search section and hides query form.

window.onload = function () {

    for (var y = 0; y < locations.length; y++){
        if (accommodation_type.includes(locations[y].acc_type)== false){
            accommodation_type.push(locations[y].acc_type)
            }
        if (region.includes(locations[y].prov)== false){
            region.push(locations[y].prov)
            }
        if (counties[locations[y].prov].includes(locations[y].county)== false){
            counties[locations[y].prov].push(locations[y].county)
            }
        }

    var select = document.getElementById("accommodation");  // populate the accomadation type list
    for(var i = 0; i < accommodation_type.length;++i){  
        var option = document.createElement('option');
        option.text = accommodation_type[i];
        option.value = accommodation_type[i];
        select.add(option)
    };
    document.getElementById("formSection").style.display = "none" // Hide the form section on load.

};
/* -_-_-_-_-_-_-_-_-_-_ Covid Section _-_-_-_-_-_-_-_-_-_- */
function functionHideCovidInfo(){
    document.getElementById("hideCovid").classList.add("hide")
}
/* -_-_-_- Drop Down Lists _-_-_-_ */

document.getElementById("accommodation").addEventListener("change", function(){
    document.getElementById("province").innerHTML = "";
    var region_lst = document.getElementById("province");  // populate the list of provinces
    for(var x = 0; x < region.length;++x){  
        var prov = document.createElement('option');
        prov.text = region[x];
        prov.value = region[x];
        region_lst.add(prov)
    }

    document.getElementById("province_list").classList.remove("hide")
    document.getElementById("province_list").classList.add("show")

});

// update the county list from the above based on selected provence

document.getElementById("province").addEventListener("change", function(){
    document.getElementById("county").innerHTML = "";
        
    var prov_arr = eval("counties." + this.value)
    var county_lst = document.getElementById("county");
        for(var c = 0; c < prov_arr.length;++c){ 
            var cnty = document.createElement('option');
            cnty.text = prov_arr[c];
            cnty.value = prov_arr[c];
            county_lst.add(cnty)
        }
    // Show the county drop down list when the provice is upated

    var cnty_drop = document.getElementById("county_lst");
    cnty_drop.classList.add("show");
    cnty_drop.classList.remove("hide");
});
    document.getElementById("county").addEventListener("change", function(){
    document.getElementById("mapButton").classList.add("show")
    document.getElementById("mapButton").classList.remove("hide")
});

/* -_-_-_-_-_-_-_-_-_-_ Render Map (Button Click)_-_-_-_-_-_-_-_-_-_- */
selectedData = [];

function functionRenderMap(){  
    let acc_type_selected = document.getElementById("accommodation").value;
    let province_selected = document.getElementById("province").value; 
    let county_selected = document.getElementById("county").value; 

    var markerColour
    if (acc_type_selected == "Camping"){
        markerColour = "blue.png"
    } else if (acc_type_selected == "Caravan Park"){
        markerColour = "red.png"
    } else if (acc_type_selected == "Hotel"){
        markerColour = "purple.png"
    } else if (acc_type_selected == "Hostel"){
        markerColour = "ltblue.png"
    } else if (acc_type_selected == "Bed & Breakfast"){
        markerColour = "yellow.png"
    } else {
        markerColour = "orange.png"
    }
    var iconColour = "http://maps.google.com/mapfiles/ms/icons/"+ markerColour


    if (county_selected == "Select" || county_selected == "" || province_selected == "Select" ) {
        console.log("error : no county / province selected in dropdown menu");
        document.getElementById("mapSelectionError").classList.add("show")
        document.getElementById("county_lst").classList.add("errorDropdown_col")
    }
    else {
        document.getElementById("mapSelectionError").classList.remove("show")
        document.getElementById("mapSelectionError").classList.add("hide")
        document.getElementById("county_lst").classList.remove("errorDropdown_col")
    }       
    
    //new array from locations, including only selected locations based on user input.
    selectedData = [];
    if (acc_type_selected == "All Types"){
        for (var i = 0; i < locations.length; i++) {
            if (locations[i].prov == province_selected){
                selectedData.push({name: locations[i].name, lat : locations[i].lat, lng : locations[i].lng, address : locations[i].address, website : locations[i].website,
                comments : locations[i].comments, phone : locations[i].phone, acc_type : locations[i].acc_type});
            }
        }
    }
    
    else if ((county_selected == "All Counties") && (acc_type_selected != "All Types")) {
        for (var i = 0; i < locations.length; i++) {
            if ( (locations[i].acc_type.indexOf(acc_type_selected) >= 0 ) && (locations[i].prov == province_selected)){
                selectedData.push({name: locations[i].name, lat : locations[i].lat, lng : locations[i].lng, address : locations[i].address, website : locations[i].website,
                comments : locations[i].comments, phone : locations[i].phone, acc_type : locations[i].acc_type});
            }
        }
    }
    else{
        for (var i = 0; i < locations.length; i++) {
            if ( (locations[i].acc_type.indexOf(acc_type_selected) >= 0 ) && locations[i].county == county_selected){
                selectedData.push({name: locations[i].name, lat : locations[i].lat, lng : locations[i].lng, address : locations[i].address, website : locations[i].website,
                comments : locations[i].comments, phone : locations[i].phone, acc_type : locations[i].acc_type});
            }
        }   
    }
    // Add markers to the map
    var mapOptions = {
        zoom: 7,
        center: {lat: 53.383328, lng: -7.5091553},
        mapTypeId: 'hybrid'
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        // loop through the locations
        for (var m = 0; m < selectedData.length; m++){

            var marker = new google.maps.Marker({
                position: {lat: selectedData[m].lat, lng: selectedData[m].lng},
                title: selectedData[m].name,
                map: map,
                icon: iconColour,
            });
            const infowindow = new google.maps.InfoWindow({
                content: "<h5>" + selectedData[m].name + "</h5> Address: "  + selectedData[m].address +
                '<br><Button id="moreInfo" class="btn btn-primary" onclick="functionMoreInfo()">More Info</button>' + '<p id="arrayNum" class="hide">' + m + "</p>"
            });
                 
            // Click event listner for marker
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map, marker);
            });
    }
}

function functionMoreInfo(){
    var viewer = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    console.log(typeof(viewer))
    if ( viewer >= 992 ){
        console.log("if statment " + viewer)
        document.getElementById("map").classList.remove("col-md-12")
        document.getElementById("map").classList.add("col-md-6")
        var num = document.getElementById("arrayNum").innerHTML
        document.getElementById("map_addtional_info").classList.remove("hide")
        document.getElementById("moreInfoHeader").classList.remove("hide")
        document.getElementById("nameMoreInfo").innerHTML = selectedData[num].name
        document.getElementById("nameMoreInfo1").innerHTML = selectedData[num].name
        document.getElementById("accMoreInfo").innerHTML = selectedData[num].acc_type
        document.getElementById("addressMoreInfo").innerHTML = selectedData[num].address
        document.getElementById("phoneMoreInfo").innerHTML = selectedData[num].phone
        document.getElementById("commentsMoreInfo").innerHTML = selectedData[num].comments
        document.getElementById("websiteMoreInfo").setAttribute("href", "https://" + selectedData[num].website);
    }
    else if (viewer < 992) {
        var num = document.getElementById("arrayNum").innerHTML
        var name = selectedData[num].name
        alert ("You clicked " + name)
    }
}
/* -_-_-_-_-_-_-_-_-_-_ Destinatins Section _-_-_-_-_-_-_-_-_-_- */
function functionOpenExtraText1(){
    document.getElementById("destinationTextExtra1").classList.add("show")
    document.getElementById("destinationText1").classList.add("hide")
    document.getElementById("destinationcol2").classList.add("hide")
    document.getElementById("destinationcol3").classList.add("hide")
    document.getElementById("destinationcol1").classList.add("focusView")
}

function functionCloseExtraText1() {
    document.getElementById("destinationTextExtra1").classList.remove("show")
    document.getElementById("destinationText1").classList.remove("hide")
    document.getElementById("destinationcol2").classList.remove("hide")
    document.getElementById("destinationcol3").classList.remove("hide")
    document.getElementById("destinationcol1").classList.remove("focusView")
}

function functionOpenExtraText2(){
    document.getElementById("destinationTextExtra2").classList.add("show")
    document.getElementById("destinationText2").classList.add("hide")
    document.getElementById("destinationcol1").classList.add("hide")
    document.getElementById("destinationcol3").classList.add("hide")
    document.getElementById("destinationcol2").classList.add("focusView")
}
function functionCloseExtraText2() {
    document.getElementById("destinationTextExtra2").classList.remove("show")
    document.getElementById("destinationText2").classList.remove("hide")
    document.getElementById("destinationcol1").classList.remove("hide")
    document.getElementById("destinationcol3").classList.remove("hide")
    document.getElementById("destinationcol2").classList.remove("focusView")
}

function functionOpenExtraText3(){
    document.getElementById("destinationTextExtra3").classList.add("show")
    document.getElementById("destinationText3").classList.add("hide")
    document.getElementById("destinationcol1").classList.add("hide")
    document.getElementById("destinationcol2").classList.add("hide")
    document.getElementById("destinationcol3").classList.add("focusView")
}
function functionCloseExtraText3() {
    document.getElementById("destinationTextExtra3").classList.remove("show")
    document.getElementById("destinationText3").classList.remove("hide")
    document.getElementById("destinationcol1").classList.remove("hide")
    document.getElementById("destinationcol2").classList.remove("hide")
    document.getElementById("destinationcol3").classList.remove("focusView")
}

/* -_-_-_-_-_-_-_-_-_-_ Form Section _-_-_-_-_-_-_-_-_-_- */

function functionShowHide() {
  var x = document.getElementById("formSection");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function functionShowForm() {
    var x = document.getElementById("formSection");
    x.style.display = "block";
  }
function functionHideForm(){
    var x = document.getElementById("formSection");
    if (x.style.display === "block") {
        x.style.display = "none";
    }
}

// Submit form.
function submitForm(){
    alert ("Thank you. Your recommendation has been sent")
    return false;
}
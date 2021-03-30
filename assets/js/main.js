/*jshint esversion: 6 */ 

var locations = []; // decalre locations, imported from locations.js
/* -_-_-_-_-_-_-_-_-_-_ Draw Blank Map _-_-_-_-_-_-_-_-_-_- */
function initMap() {
        let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7.4,
        center: {lat: 53.383328, lng: -7.5091553},
        mapTypeId: 'hybrid'
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
            };

/* -_-_-_- onLoad Function _-_-_-_ */

    // Loads the first menu for map search section and hides query form.

window.onload = function () {
    for (var y = 0; y < locations.length; y++){
        if (accommodation_type.includes(locations[y].acc_type)== false){
            accommodation_type.push(locations[y].acc_type);
            }
        if (region.includes(locations[y].prov)== false){
            region.push(locations[y].prov);
            }
        if (counties[locations[y].prov].includes(locations[y].county)== false){
            counties[locations[y].prov].push(locations[y].county);
            }
        }

    var select = document.getElementById("accommodation");  // populate the accomadation type list
    for(var i = 0; i < accommodation_type.length;++i){  
        var option = document.createElement('option');
        option.text = accommodation_type[i];
        option.value = accommodation_type[i];
        select.add(option);
    }
};
/* -_-_-_-_-_-_-_-_-_-_ Covid Section _-_-_-_-_-_-_-_-_-_- */
function functionHideCovidInfo(){
    document.getElementById("hideCovid").classList.add("hide");
}
/* -_-_-_- Drop Down Lists _-_-_-_ */

document.getElementById("accommodation").addEventListener("change", function(){
    document.getElementById("province").innerHTML = "";
    var region_lst = document.getElementById("province");  // populate the list of provinces
    for(var x = 0; x < region.length;++x){  
        var prov = document.createElement('option');
        prov.text = region[x];
        prov.value = region[x];
        region_lst.add(prov);
    }

    document.getElementById("province_list").classList.remove("hide");
    document.getElementById("province_list").classList.add("show");
});

// update the county list from the above based on selected provence

document.getElementById("province").addEventListener("change", function(){
    document.getElementById("county").innerHTML = "";
        
    var prov_arr = eval("counties." + this.value);
    var county_lst = document.getElementById("county");
        for(var c = 0; c < prov_arr.length;++c){ 
            var cnty = document.createElement('option');
            cnty.text = prov_arr[c];
            cnty.value = prov_arr[c];
            county_lst.add(cnty);
        }
    // Show the county drop down list when the provice is upated

    var cnty_drop = document.getElementById("county_lst");
    cnty_drop.classList.add("show");
    cnty_drop.classList.remove("hide");
});
    document.getElementById("county").addEventListener("change", function(){
    document.getElementById("mapButton").classList.add("show");
    document.getElementById("mapButton").classList.remove("hide");
});

/* -_-_-_-_-_-_-_-_-_-_ Render Map (Button Click)_-_-_-_-_-_-_-_-_-_- */
let selectedData = [];
var viewer = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

function functionRenderMap(){  
    let acc_type_selected = document.getElementById("accommodation").value;
    let province_selected = document.getElementById("province").value; 
    let county_selected = document.getElementById("county").value; 

    var markerColour;
    if (acc_type_selected == "Camping"){
        markerColour = "blue.png";
    } else if (acc_type_selected == "Caravan Park"){
        markerColour = "red.png";
    } else if (acc_type_selected == "Hotel"){
        markerColour = "purple.png";
    } else if (acc_type_selected == "Hostel"){
        markerColour = "ltblue.png";
    } else if (acc_type_selected == "Bed & Breakfast"){
        markerColour = "yellow.png";
    } else {
        markerColour = "orange.png";
    }
    var iconColour = "http://maps.google.com/mapfiles/ms/icons/"+ markerColour;


    if (county_selected == "Select" || county_selected == "" || province_selected == "Select" ) {
        console.log("error : no county / province selected in dropdown menu");
        document.getElementById("mapSelectionError").classList.add("show");
        document.getElementById("county_lst").classList.add("errorDropdown_col");
    }
    else {
        document.getElementById("mapSelectionError").classList.remove("show");
        document.getElementById("mapSelectionError").classList.add("hide");
        document.getElementById("county_lst").classList.remove("errorDropdown_col");
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
        for (var j = 0; j < locations.length; j++) {
            if ( (locations[j].acc_type.indexOf(acc_type_selected) >= 0 ) && (locations[j].prov == province_selected)){
                selectedData.push({name: locations[j].name, lat : locations[j].lat, lng : locations[j].lng, address : locations[j].address, website : locations[j].website,
                comments : locations[j].comments, phone : locations[j].phone, acc_type : locations[j].acc_type});
            }
        }
    }
    else{
        for (var k = 0; k < locations.length; k++) {
            if ( (locations[k].acc_type.indexOf(acc_type_selected) >= 0 ) && locations[k].county == county_selected){
                selectedData.push({name: locations[k].name, lat : locations[k].lat, lng : locations[k].lng, address : locations[k].address, website : locations[k].website,
                comments : locations[k].comments, phone : locations[k].phone, acc_type : locations[k].acc_type});
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
        for (let m = 0; m < selectedData.length; m++){

            let marker = new google.maps.Marker({
                position: {lat: selectedData[m].lat, lng: selectedData[m].lng},
                title: selectedData[m].name,
                map: map,
                icon: iconColour,
            });
            const infowindow = new google.maps.InfoWindow({
                content: "<h5>" + selectedData[m].name +'<a href="' + selectedData[m].website + 
                '" target="_blank"><i class="fas fa-external-link-alt popup_link_icon" aria-hidden="true"></i></a>' + 
                "</h5>" + '<i class="fas fa-phone popup_icon_gen"></i>' + selectedData[m].phone + '<br>' +
                '<i class="fas fa-map-marker-alt popup_icon_gen"></i>' + selectedData[m].address + '<br>' + 
                '<i class="fas fa-info popup_icon_gen"></i>' + selectedData[m].comments
            });
                 
            // Click event listner for marker
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map, marker);
            });
    }
}

function functionClosePopup(){
    document.getElementById("popup").classList.remove("show");
    document.getElementById("popup").classList.add("hide");
}
/* -_-_-_-_-_-_-_-_-_-_ Destinatins Section _-_-_-_-_-_-_-_-_-_- */
function functionOpenExtraText1(){
    document.getElementById("wild_atlantic_info").style.display = "block";
    document.getElementById("wild_atlantic_info").style.visibility = "visible";
    document.getElementById("wild_atlantic_down_arrows").style.display = "none";
    document.getElementById("wild_atlantic_down_arrows").style.visibility = "hidden";
}
function functionCloseExtraText1() {
    document.getElementById("wild_atlantic_info").style.display = "none";
    document.getElementById("wild_atlantic_info").style.visibility = "hidden";
    document.getElementById("wild_atlantic_down_arrows").style.display = "block";
    document.getElementById("wild_atlantic_down_arrows").style.visibility = "visible";
}
function functionOpenExtraText2(){
    document.getElementById("hidden_heartland_info").style.display = "block";
    document.getElementById("hidden_heartland_info").style.visibility = "visible";
    document.getElementById("hidden_heartland_down_arrows").style.display = "none";
    document.getElementById("hidden_heartland_down_arrows").style.visibility = "hidden";
}
function functionCloseExtraText2() {
    document.getElementById("hidden_heartland_info").style.display = "none";
    document.getElementById("hidden_heartland_info").style.visibility = "hidden";
    document.getElementById("hidden_heartland_down_arrows").style.display = "block";
    document.getElementById("hidden_heartland_down_arrows").style.visibility = "visible";
}
function functionOpenExtraText3(){
    document.getElementById("ancient_east_info").style.display = "block";
    document.getElementById("ancient_east_info").style.visibility = "visible";
    document.getElementById("ancient_east_down_arrows").style.display = "none";
    document.getElementById("ancient_east_down_arrows").style.visibility = "hidden";
}
function functionCloseExtraText3() {
   document.getElementById("ancient_east_info").style.display = "none";
    document.getElementById("ancient_east_info").style.visibility = "hidden";
    document.getElementById("ancient_east_down_arrows").style.display = "block";
    document.getElementById("ancient_east_down_arrows").style.visibility = "visible";
}
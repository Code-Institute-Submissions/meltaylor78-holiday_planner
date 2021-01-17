/* -_-_-_-_-_-_-_-_-_-_ Draw Blank Map _-_-_-_-_-_-_-_-_-_- */
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: {lat: 53.383328, lng: -7.5091553        },
        mapTypeId: 'satellite'
    });
}

/* -_-_-_-_-_-_-_-_-_-_ Lists _-_-_-_-_-_-_-_-_-_- */

var accommodation_type = ["Camping", "Caravan Park", "Hotel", "Hostel", "Bed & Breakfast"];
var region = ["Select","Connacht", "Leinster", "Munster", "Ulster"];
var counties = {  
                "Connacht": ["Select","Galway", "Leitrim", "Mayo", "Roscommon", "Sligo"], 
                "Leinster": ["Select","Carlow", "Dublin", "Kildare", "Kilkenny", "Laois", "Longford", "Louth", "Meath", "Offaly", "Westmeath", "Wexford", "Wicklow"],
                "Munster": ["Select","Clare", "Cork", "Kerry", "Limerick", "Tipperary", "Waterford"],
                "Ulster": ["Select","Antrim", "Armagh", "Cavan", "Donegal", "Down", "Fermanagh", "Derry", "Monaghan", "Tyrone"]}

/* -_-_-_- onLoad Function _-_-_-_ */

    // Loads the first menu for map search section and hides query form.

window.onload = function () {

    var select = document.getElementById("accommodation");  // populate the accomadation type list
    for(var i = 0; i < accommodation_type.length;++i){  
        var option = document.createElement('option');
        option.text = accommodation_type[i];
        option.value = accommodation_type[i];
        select.add(option)
    };
    document.getElementById("formSection").style.display = "none" // Hide the form section on load.
};
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
});
    document.getElementById("county").addEventListener("change", function(){
    document.getElementById("mapInstructions").classList.add("hide")
    document.getElementById("mapButton").classList.add("show")

});

/* -_-_-_-_-_-_-_-_-_-_ Render Map (Button Click)_-_-_-_-_-_-_-_-_-_- */
selectedData = [];

function functionRenderMap(){  
    let acc_type_selected = document.getElementById("accommodation").value;
    let province_selected = document.getElementById("province").value; 
    let county_selected = document.getElementById("county").value; 

    if (county_selected == "Select" || county_selected == "" ) {
        console.log("error : no county / province selected in dropdown menu");
        document.getElementById("mapSelectionError").classList.add("show")
        document.getElementById("county_lst").classList.add("errorDropdown_col")
    }
    else {
        document.getElementById("mapSelectionError").classList.remove("show")
        document.getElementById("mapSelectionError").classList.add("hide")
        document.getElementById("county_lst").classList.remove("errorDropdown_col")
        document.getElementById("mapSelectionError").classList.add("hide")
    }       
    
    //new array from locations, including only selected locations based on user input.
    selectedData = [];
    for (var i = 0; i < locations.length; i++) {
        if (locations[i].acc_type.includes(acc_type_selected) && locations[i].county == county_selected){
            selectedData.push({name: locations[i].name, lat : locations[i].lat, lng : locations[i].lng });
        }
    }
    console.log(selectedData)
    // Add markers to the map
    var mapOptions = {
            zoom: 7,
            center: {lat: 53.383328, lng: -7.5091553},
            mapTypeId: 'satellite'
        };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    for (var m = 0; m < selectedData.length; m++){
        var marker = new google.maps.Marker({
                position: {lat: selectedData[m].lat, lng: selectedData[m].lng},
                title: selectedData[m].name,
                map: map
            });
    }

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

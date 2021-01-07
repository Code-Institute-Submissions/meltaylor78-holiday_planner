/* -_-_-_-_-_-_-_-_-_-_ Draw Blank Map _-_-_-_-_-_-_-_-_-_- */
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: {
            lat: 53.383328,
            lng: -7.5091553
        },
        mapTypeId: 'satellite'
    });
}

/* -_-_-_-_-_-_-_-_-_-_ Dropdown Lists _-_-_-_-_-_-_-_-_-_- */

var accommodation_type = ["Camping", "Caravan Park", "Hotel", "Hostel", "Bed & Breakfast"];
var region = ["Connacht", "Leinster", "Munster", "Ulster"];

window.onload = function () {
    var select = document.getElementById("accommodation");  // populate the accomadation type list
    for(var i = 0; i < accommodation_type.length;++i){  
        var option = document.createElement('option');
        option.text = accommodation_type[i];
        option.value = accommodation_type[i];
        select.add(option)
    };
    var region_lst = document.getElementById("province");  // populate the list of provinces
    for(var x = 0; x < region.length;++x){  
        var prov = document.createElement('option');
        prov.text = region[x];
        prov.value = region[x];
        region_lst.add(prov)
    }
    document.getElementById("formSection").style.display = "none" // Hide the form section on load.
};

var counties = {  
                "Connacht": ["Galway", "Leitrim", "Mayo", "Roscommon", "Sligo"], 
                "Leinster": ["Carlow", "Dublin", "Kildare", "Kilkenny", "Laois", "Longford", "Louth", "Meath", "Offaly", "Westmeath", "Wexford", "Wicklow"],
                "Munster": ["Clare", "Cork", "Kerry", "Limerick", "Tipperary", "Waterford"],
                "Ulster": ["Antrim", "Armagh", "Cavan", "Donegal", "Down", "Fermanagh", "Derry", "Monaghan", "Tyrone"]}
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
})
/* -_-_-_-_-_-_-_-_-_-_ Render Map _-_-_-_-_-_-_-_-_-_- */

function functionRenderMap(){  
    let acc_type_selected = document.getElementById("accommodation").value;
    let province_selected = document.getElementById("province").value; 
    let county_selected = document.getElementById("county").value; 

    console.log("The accommodation type selected was : " + acc_type_selected);
    console.log("The province selected was : " + province_selected);
    console.log("The province county selected was : " + county_selected)

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

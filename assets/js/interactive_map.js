function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: {
            lat: 53.383328,
            lng: -7.5091553
        }
    });
}

/* -_-_-_-_-_-_-_-_-_-_ Dropdown Lists _-_-_-_-_-_-_-_-_-_- */

var accommodation_type = ["Camping", "Caravan Park", "Hotel", "Hostel", "Bed & Breakfast"];
var region = ["Connacht", "Leinster", "Munster", "Ulster"];

window.onload = function () {
    var select = document.getElementById("accommodation");
    for(var i = 0; i < accommodation_type.length;++i){  
        var option = document.createElement('option');
        option.text = accommodation_type[i];
        option.value = accommodation_type[i];
        select.add(option)
    };
    var region_lst = document.getElementById("province");
    for(var x = 0; x < region.length;++x){  
        var prov = document.createElement('option');
        prov.text = region[x];
        prov.value = region[x];
        region_lst.add(prov)
    }
};


var counties = {
    "Connacht": ["Galway", "Leitrim", "Mayo", "Roscommon", "Sligo"], 
    "Leinster": ["Carlow", "Dublin", "Kildare", "Kilkenny", "Laois", "Longford", "Louth", "Meath", "Offaly", "Westmeath", "Wexford", "Wicklow"],
    "Munster": ["Clare", "Cork", "Kerry", "Limerick", "Tipperary", "Waterford"],
    "Ulster": ["Antrim", "Armagh", "Cavan", "Donegal", "Down", "Fermanagh", "Derry", "Monaghan", "Tyrone"]}

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
});
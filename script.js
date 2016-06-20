/**
 * Created by Hernan Y.Ke on 2016/6/23.
 */
function displayLocation(position){
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    var pLocation = document.getElementById("location");
    pLocation.innerHTML+=lat+","+long+"<br>";
}

window.onload = function () {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(displayLocation)
    }else{
        alert('error')
    }
}
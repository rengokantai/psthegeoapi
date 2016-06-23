/**
 * Created by Hernan Y.Ke on 2016/6/23.
 */
function displayLocation(position){
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    var pLocation = document.getElementById("location");
    pLocation.innerHTML+=lat+","+long+"<br>";
}

function displayEoor(err){
    var errors = ['Unknown error','Permission denied by user'];
    var message = errors[err.code];
    console.warn(message,err.message);
}

window.onload = function () {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(displayLocation,displayEoor)
    }else{
        alert('error')
    }
}
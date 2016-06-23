/**
 * Created by Hernan Y.Ke on 2016/6/23.
 */
function displayLocation(position){
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    var pLocation = document.getElementById("location");
    var pInfo = document.getElementById("info");
    var date = new Date();
    pLocation.innerHTML+=lat+","+long+"<br>" + date + "<br>" + "accuracy " +position.coords.accuracy+" ";
    if(position.coords.altitude) {
        pInfo.innerHTML+=position.coords.altitude+" ";
    }
    if(position.coords.altitudeAccuracy) {
        pInfo.innerHTML+=position.coords.altitudeAccuracy;
    }
    if(position.coords.heading) {
        pInfo.innerHTML+="heading "+position.coords.heading;
    }
    if(position.coords.speed) {
        pInfo.innerHTML+="speed "+position.coords.speed;
    }

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
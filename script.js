/**
 * Created by Hernan Y.Ke on 2016/6/23.
 */
var trackid=null;
var locations=[]
function displayLocation(position){
    var lat = position.coords.latitude;
    var long = position.coords.longitude;

    var googleLoc = new google.maps.LatLng(
        lat,long
    );
    locations.push(googleLoc);


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

function displayError(err){
    var errors = ['Unknown error','Permission denied by user'];
    var message = errors[err.code];
    console.warn(message,err.message);
}

window.onload = function () {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(displayLocation,displayError)
    }else{
        alert('error')
    }

    var dis = document.getElementById('dis');
    var track = document.getElementById('track');
    track.onclick = function(e){
        e.preventDefault();
        if(track.innerHTML==="start"){
            track.innerHTML="stop";
            trackme();
        }else{
            track.innerHTML="start";
            cleartracking();
            var d = comptotaldis();
            if(d>0){
                d=Math.round(d*1000)/1000;
                dis.innerHTML = d+"km"
            }else{
                dis.innerHTML='nothing'
            }
        }
    }

}


function comptotaldis(){
    var totaldis=0;
    if(location.length>1){
        for(vari=1;i<locations.length;i++){
            totaldis+=google.maps.geometry.spherical.computeDistanceBetween(locations[i-1],locations[i])
        }
    }
    return totaldis;
}

function trackme(){
    trackid = navigator.geolocation.watchPosition(displayLocation,displayError)
}

function cleartracking(){
    if(trackid){
        navigator.geolocation.clearWatch(trackid)
        trackid=null;
    }
}
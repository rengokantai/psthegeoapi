####psthegeoapi
#####
```
position.coords.latitude
position.coords.longtitude
position.coords.accuracy
position.timestamp
```
######11 Geolocation basics->demo adding error handling
content settings-> location->manage exceptions delete local location

######13 more geolocation properties
```
position.coords.altitude
position.coords.altitudeAccuracy
position.coords.speed
position.coords.heading
```
######15
```
var trackId = navigator.geolocation.watchPosition  //may drain battery
```
######17 computeDistanceBetween
Google maps geolocation
```
google.maps.geometry
```
useage
```
google.maps.geometry.spherical.computeDistanceBetween(lat,long)AIzaSyADsv_9X4wOMWHAo43RaGltLwPWspsWczg
```
######20 The position
```
navigator.geolocation.getCurrentPosition(a,b,options)
```
```
enableHighAccuracy
timeout
maximumAge
```
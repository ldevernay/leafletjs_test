
var mymap = L.map('mapid').setView([43.610, 3.877], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibGF1ZGV2IiwiYSI6ImNqdjNrODFxNDF0eWo0NG80cGptd2VjaDMifQ.iZ8bPDiP6WosBSznxFMiug'
}).addTo(mymap);
var marker = L.marker([43.610, 3.877]).addTo(mymap);

var popup = L.popup();
marker.on('click', function (e) {
    popup.setLatLng(e.latlng).setContent("Hello world!").openOn(mymap);

})

mymap.on('click', function (e) {
    console.log(e.latlng.lat + " + " + e.latlng.lng);
    var new_marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(mymap);
    new_marker.on('click', function(e){
        //new_marker.removeFrom(mymap);
        // TODO : ajouter une popup dans laquelle on affiche les
        // infos qu'on récupère sur OpenWeatherMapAPI
        // Pour cela, utiliser les coordonnées sur la variable e.
    })
})
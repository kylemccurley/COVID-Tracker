const myMap = L.map('mapid', {
    center: [37.7749, -122.4194],
    zoom: 13
  })

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', { 
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18, 
id: 'mapbox/streets-v11', 
accessToken: 'pk.eyJ1Ijoia21jY3VybGV5IiwiYSI6ImNrZnl3a3JucDBpbnoydnFxaW51M255eWwifQ.iXqdUvwIU9fAv1FzsxpwMg' }).addTo(myMap);
var marker = L.marker([51.5, -0.09]).addTo(myMap);
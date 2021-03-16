let map;
let infoObject = [];
let centerCords = {

    lat: 6.3690,
    lng: 34.8888
};
let markersOnMap = [{
    placeName: "Serengeti",
    text: "The Serengeti is famed for its annual wildebeest migration, when some 8 million hooves cross the open plains, as more than 1,500,000 wildebeest, 200,000 zebra and 300,000 Thomson's gazelle join the trek for fresh grazing.",
    LatLng: [{
        lat: 6.3728,
        lng: 34.6857
    }]
},
{
    placeName: "Kilimanaro",
    text: "Kilimanjaro is famous for it's landmark that is also Africa's tallest peak.Mount Kilimanjaro, at around 6,000m towers over the plains of Eastern Africa and is one of the most iconic volcanoes in the world.",
    LatLng: [{
        lat: 3.0674,
        lng: 37.3556
    }]
},
{
    placeName: "Zanzibar",
    text: "anzibar is famous for its spices. Second only to tourism, spice farming forms a major part of Zanzibar's economy. The islands are sometimes referred to as the Spice Islands, due to the cloves, nutmeg, cinnamon, and black pepper that are grown there",
    LatLng: [{
        lat: 6.1357,
        lng: 39.3621
    }]
},

];

window.onload = function () {
    initMap();
};

function addMarkerInfo() {
    for (let i = 0; i < markersOnMap.length; i++) {
        let contentString = '<div id="content"><h2>' + markersOnMap[i].placeName +
            '</h2><p>' + markersOnMap[i].text + '</p></div>';

        const marker = new google.maps.Marker({
            position: markersOnMap[i].LatLng[0],
            map: map
        });

        const infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 200
        });

        marker.addListener('click', function () {
            closeOtherInfo();
            infowindow.open(marker.get('map'), marker);
            infoObject[0] = infowindow;
        });
    }
}

function closeOtherInfo() {
    if (infoObject.length > 0) {
        infoObject[0].set("marker", null);
        infoObject[0].close();
        infoObject.length = 0;
    }
}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4.5,
        center: centerCords
    });
    addMarkerInfo();
}
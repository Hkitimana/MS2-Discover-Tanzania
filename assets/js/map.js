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
        lat: 1.8936,
        lng: 34.6857
    }]
},
{
    placeName: "Kilimanaro",
    text: "The top attractions to visit in Kilimanjaro Region are: Monkey Adventures, visit kikuletwa hot springs & Kilimanjaro Climbing",
    LatLng: [{
        lat: 3.0674,
        lng: 37.3556
    }]
},
{
    placeName: "Zanzibar",
    text: "Wander the Maze of Stone Town. Watch Acrobatics and Capoeira on the Beach. Buy Spices and Fabrics at Darajani Market. Eat at a Zanzibar Pizza at Forodhani Gardens. Take a Walking Tour of Stone Town. Learn About the Slave Trade. Go For Sundowners at the Africa House Hotel.",
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
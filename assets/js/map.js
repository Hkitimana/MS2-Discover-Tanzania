function initMap(){
    var options = {
        zoom:8,
        center:{lat:6.3690,lng:-34.8888}
    }
   
    var map = new 
    google.maps.Map(document.getElementById('map')), options;

    var marker = new google.maps.Marker({
        position:{lat:2.3333,lng:-34.8333},
        map:map
    })

    var marker = new google.maps.Marker({
        position:{lat:6.1357,lng:-39.3621},
        map:map
    })

    var marker = new google.maps.Marker({
        position:{lat:6.1357,lng:-39.3621},
        map:map
    })
}
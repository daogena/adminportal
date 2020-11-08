var map;
var markers = [];
var infoWindow;

const API_URL = "https://api.bill.com/api/v2/"; 
const developer_key = "01EJANXDDSOOVBNKZ481";

// Geocoding API
const geocode_API = "AIzaSyATEM4J1Oa8UGZIsDH4ITK1omPh-brtzTM"; 

darktheme = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#181818"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1b1b1b"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#2c2c2c"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8a8a8a"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#373737"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#3c3c3c"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#4e4e4e"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#3d3d3d"
        }
      ]
    }
  ] 

function initMap() {
    var losAngeles = {
        lat: 34.063380,
        lng: -118.358080
    }
    geocoder = new google.maps.Geocoder();
    map = new google.maps.Map(document.getElementById('map'), {
        center: losAngeles, 
        zoom: 11, 
        mapTypeId: 'roadmap', 
        styles: darktheme
    });
    infoWindow = new google.maps.InfoWindow(); 
}

function searchVendors() {
    var foundVendors = []; 
    var zipCode = document.getElementById('zip-code-input').value;
    if (zipCode) {
        for(var vendor of vendors) {
            var postal = vendor['addressZip']
            if(postal == zipCode) {
                foundVendors.push(vendor);
            }
        }
    }
    else {
        foundVendors = vendors; 
    }
    clearLocations();
    displayVendors(foundVendors); 
    showStoresMarkers(foundVendors); 
    setOnClickListener(); 
}

function clearLocations() {
    infoWindow.close();
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers.length = 0;
}

function setOnClickListener() {
    var vendorElements = document.querySelectorAll('.vendor-container'); 
    vendorElements.forEach(function(element, index) {
        element.addEventListener('click', function() {
            new google.maps.event.trigger(markers[index], 'click'); 
        })
    })
}

function displayVendors(vendors) {
    var vendorsHtml = '';
    for(var [index, vendor] of vendors.entries()) {
        var address2 = vendor['addressCity'] + ", " + vendor['addressState'] + " " + vendor['addressZip']
        var phone = vendor['phone']; 
        vendorsHtml += `
            <div class="vender-container">
                <div class="vendor-container-background">
                    <div class="vendor-info-container">
                        <div class="vendor-address">
                            <span>${vendor['address1']}</span>
                            <span>${address2}</span> 
                        </div>
                        <div class="vendor-phone-number">${phone}</div>
                    </div>
                    <div class="vendor-number-container">
                        <div class="vendor-number">${++index}</div>
                    </div>
                </div>
            </div>
        `
        document.querySelector('.vendors-list').innerHTML = vendorsHtml; 
    
    }
}

function showStoresMarkers(vendors) {
    var bounds = new google.maps.LatLngBounds();
    for(var [index, vendor] of vendors.entries()) {
        var address = vendor['address1'] + vendor['addressCity'] + vendor['addressState'];
        var lat; 
        var lng; 
        geocoder.geocode({ 'address': address}, function(results) {
            lat = parseFloat(results[0].geometry.location.lat()); 
            lng = parseFloat(results[0].geometry.location.lng());
            var latlng = new google.maps.LatLng(lat, lng);
            var name = vendor['name'];
            address = vendor['address1'] + ", " + vendor['addressCity'] + ", " + vendor['addressState'] + " " + vendor['addressZip'];
            var phoneNumber = vendor['phone'];
            bounds.extend(latlng);
            createMarker(latlng, name, address, phoneNumber, index+1);
            map.fitBounds(bounds);
        });
    }
}

function createMarker(latlng, name, address, phoneNumber, index) {
    var image = {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 8,
        fillColor: '#BD8C7D',
        fillOpacity: 0.4,
        strokeColor: '#BD8C7D',
        strokeWeight: 15
    }
    var html = `
            <div class="vendor-info-window">
                <div class="vendor-info-name">
                    ${name}
                </div>
                <div class="vendor-info-address">
                    <div class="circle">
                        <i class="fas fa-location-arrow"></i>
                    </div>
                    ${address}
                </div>
                <div class="vendor-info-phone">
                    <div class="circle">
                        <i class="fas fa-phone-alt"></i>
                    </div>
                    ${phoneNumber}
                </div>
            </div>
    `;
    var marker = new google.maps.Marker({
        map: map,
        position: latlng,
        label: index.toString(),
        icon: image
    });
    google.maps.event.addListener(marker, 'click', function() {
        infoWindow.setContent(html);
        infoWindow.open(map, marker);
    });
    markers.push(marker);
}
// Get current location
function curSuccess(pos) {
    const coords = pos.coords;

    console.log(`Latitude: ${coords.latitude}`);
    console.log(`Longitude: ${coords.longitude}`);
    console.log(`Within: ${coords.accuracy} meters`);
}

function curError(erro) {
    console.log('Error: ${error.code} - ${error.message}')
}

// Get users Location
const curOptions = {
    enableHighAccuracy: true, // Use GPS if available
    timeout: 5000, // Time to wait to stop trying the location
    maximumAge: 0, // DO not use a cached position
};


navigator.geolocation.getCurrentPosition(curSuccess, curError, curOptions);


// WatchPosition
const target = {
    latitude: 41.3594644,
    longitude: -71.2848154
}

function watchSuccess(pos) {
    const coords = pos.coords;

    if (target.latitude === coords.latitude && target.longitude === coords.longitude) {
        console.log('You have reached your destination!');
        navigator.geolocation.clearWatch(id);
    } 

}

function watchError(erro) {
    console.log('Error: ${error.code} - ${error.message}')
}

// Get users Location
const watchOptions = {
    enableHighAccuracy: true, // Use GPS if available
    timeout: 5000, // Time to wait to stop trying the location
    maximumAge: 0, // DO not use a cached position
};


// navigator.geolocation.getCurrentPosition(watchSuccess, watchError, watchOptions);

//0r 

// Using clear watch method
const id = navigator.geolocation.getCurrentPosition(watchSuccess, watchError, watchOptions);




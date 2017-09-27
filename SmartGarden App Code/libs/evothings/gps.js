function onPositionUpdate(position)
        {
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            alert("Current position: " + lat + " " + lng);
        }

        if(navigator.geolocation)
            navigator.geolocation.getCurrentPosition(onPositionUpdate);
        else
            alert("navigator.geolocation is not available");
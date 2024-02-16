$(document).ready(function () {
    // Fetch data from Weatherbit API
    $.ajax({
        url: "https://api.weatherbit.io/v2.0/current",
        data: {
            city: "cincinnati",
            key: "9dfcc371ce9e44f38aa65500af54f3c0" // Replace with your Weatherbit API key
        },
        success: function(data) {
            // Extract relevant weather information
            var temperature = data.data[0].temp;
            var description = data.data[0].weather.description;
            var iconCode = data.data[0].weather.icon;

            // Update weather information
            $("#temperature").text(temperature + "°C");
            $("#description").text(description);

            // Update weather icon
            $("#weather-icon").attr("src", "https://www.weatherbit.io/static/img/icons/" + iconCode + ".png");
            $("#weather-icon").attr("alt", description);
        },
        error: function(xhr, status, error) {
            console.error("Error fetching weather:", error);
            $("#temperature").text("Error");
            $("#description").text("Error fetching weather");
        }
    });
});

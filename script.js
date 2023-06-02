let weather = {
    fetchWeather: function (city) {
      fetch(`http://localhost/NayanRajKhanal_2227486_WeatherApp/app/index.php?City=${city}`
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const { City } = data;
    const { Icon,Weather_description } = data;
    const { Weather_temperature, Pressure, Humidity} = data;
    const { Weather_wind, Direction_of_wind } = data;
    date = new Date(data.dt * 1000);

      document.querySelector(".city").innerText = City;
      document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + Icon + ".png";
      document.querySelector(".description").innerText = Weather_description;
      document.querySelector(".temp").innerText = Math.round(Weather_temperature) + "°C";
      document.querySelector(".humidity").innerText =
        "Humidity: " + Humidity + "%";
      document.querySelector(".wind").innerText =
        "Wind speed: " + Weather_wind + " m/s";
      document.querySelector(".winddeg").innerText =
        "Wind Degree: " + Direction_of_wind + "°";
      document.querySelector(".pressure").innerText =
        "Pressure: " + Pressure + " hPa";
      document.querySelector(".date").innerText = date.toDateString();
      localStorage.City = City;
      localStorage.Icon = Icon;
      localStorage.Weather_description = Weather_description;
      localStorage.Weather_temperature = Weather_temperature;
      localStorage.Humidity = Humidity;
      localStorage.Pressure = Pressure;
      localStorage.Weather_wind = Weather_wind;
      localStorage.Direction_of_wind = Direction_of_wind;
      localStorage.dt = data.dt;
      localStorage.when = Date.now();
    },
    
  };
  if (
    localStorage.when != null &&
    parseInt(localStorage.when) + 1800000 > Date.now()
  ) {
    console.log("From Storage");
    let freshness =
    Math.round((Date.now() - localStorage.when) / 1000) + " second(s)";
    date = new Date(localStorage.dt * 1000);

    document.querySelector(".city").innerText = localStorage.City;
      document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + localStorage.Icon + ".png";
      document.querySelector(".description").innerText = localStorage.Weather_description;
      document.querySelector(".temp").innerText = Math.round(localStorage.Weather_temperature) + "°C";
      document.querySelector(".humidity").innerText =
        "Humidity: " + localStorage.Humidity + "%";
      document.querySelector(".wind").innerText =
        "Wind speed: " + localStorage.Weather_wind + " m/s";
      document.querySelector(".winddeg").innerText =
        "Wind Degree: " + localStorage.Direction_of_wind + "°";
      document.querySelector(".pressure").innerText =
        "Pressure: " + localStorage.Pressure + " hPa";
      document.querySelector(".date").innerText = date.toDateString();

  }
  else(
  weather.fetchWeather("Gloucestershire"));
function search(event){
    event.preventDefault();
    let input = document.querySelector("#Search-text");
    let h2 = document.querySelector("#city");
    h2.innerHTML = `${input.value}`;
    let apiKey = "ec49etfea43b9bf6o7c77b0d49c77081";
    let city =  input.value;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(displayWeather);
}
function displayWeather(response){
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.city;
    let temperature = document.querySelector("#temp");
    temperature.innerHTML = Math.round(response.data.temperature.current);
    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = Math.round(response.data.temperature.humidity);
    let wind = document.querySelector("#wind");
    wind.innerHTML = Math.round(response.data.wind.speed);
    let description = document.querySelector("#description");
    description.innerHTML = response.data.condition.description;
    if (description.innerHTML.length > 10) {
        description.style.fontSize = "1.2rem"; 
    }
    let icon = document.querySelector("#temp-icon");
    icon.src = response.data.condition.icon_url;

    
}
let searchcity = document.querySelector("#enter");
searchcity.addEventListener('click', search);

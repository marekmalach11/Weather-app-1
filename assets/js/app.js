let weatherForm = document.querySelector('.weather__form')
let inputCity = document.querySelector('.weather__city')
let apiDataContainer = document.querySelector('.weather__data')

let apiUrl = 'https://api.weatherapi.com/v1/current.json?key=f910be2548ab4b75a51131245230104&aqi=no&q='

weatherForm.addEventListener('submit', (event) => {
    let city = inputCity.value;
    let fullApiUrl = apiUrl + city

    fetch(fullApiUrl).then(response => response.json()).then((dataFromApi) => {
        // console.log(dataFromApi.current.temp_c)
        let view = ``
        // view += `W ${dataFromApi.location.name} jest dzisiaj ${dataFromApi.current.temp_c} stopni Celsjusza`

        view += `<div class="weather__info">`


        // icon
        view += `<div class="weather__icon"><img src="${dataFromApi.current.condition.icon}" alt="${dataFromApi.current.condition.text}">
                </div>`

        //temp
        view += `<div class="weather__temp">

        ${dataFromApi.current.temp_c} <span>
            &deg; C
        </span>
        </div>`
        view += `<div class="weather__details">
                <p>The amount of rainfall: ${dataFromApi.current.precip_mm}mm </p>
                <p>Humidity: ${dataFromApi.current.humidity}%</p>
                <p>Wind: ${dataFromApi.current.wind_kph}km/h</p>
            </div>`;

        view += `</div>`

        apiDataContainer.innerHTML = view
    })


    event.preventDefault()
})

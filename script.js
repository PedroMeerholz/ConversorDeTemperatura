function converterCelcius(){
    let tempCel = Number(document.querySelector('input#inputCelcius').value)
    let resCelciusFahr = document.querySelector('h5#resCelFahr')
    let resCelciusKel = document.querySelector('h5#resCelKel')
    let convertCelciusFahr = (tempCel * (9/5)) + 32
    let convertCelciusKel = tempCel + 273.15

    resCelciusFahr.innerHTML = `Graus Fahrenheit(°F): ${convertCelciusFahr.toFixed(2)}`
    resCelciusKel.innerHTML = `Graus Kelvin(K): ${convertCelciusKel.toFixed(2)}`
}

function converterFahrenheit(){
    let tempFahr = Number(document.querySelector('input#inputFahr').value)
    let resFahrenheitCel = document.querySelector('h5#resFahrCel')
    let resFahrenheitKel = document.querySelector('h5#resFahrKel')
    let convertFahrenheitCel = (tempFahr - 32) * (5/9)
    let convertFahrenheitKel = (tempFahr - 32) * (5/9) + 273.15

    resFahrenheitCel.innerHTML = `Graus Celcius(°C): ${convertFahrenheitCel.toFixed(2)}`
    resFahrenheitKel.innerHTML = `Graus Kelvin(K): ${convertFahrenheitKel.toFixed(2)}`
}

function converterKelvin(){
    let tempKel = Number(document.querySelector('input#inputKel').value)
    let resKelvinCel = document.querySelector('h5#resKelCel')
    let resKelvinFahr = document.querySelector('h5#resKelFahr')
    let convertKelvinCel = tempKel - 273.15
    let convertKelvinFahr = (tempKel - 273.15) * (9/5) + 32

    resKelvinCel.innerHTML = `Graus Celcius(°C): ${convertKelvinCel.toFixed(2)}`
    resKelvinFahr.innerHTML = `Graus Fahrenheit(°F): ${convertKelvinFahr.toFixed(2)}`
}

function converterTodos(){
    converterCelcius()
    converterFahrenheit()
    converterKelvin()
}
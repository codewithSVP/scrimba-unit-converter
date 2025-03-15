/*
1 meter = 3.28084 feet
1 liter = 0.2641729 gallon
1 kilogram = 2.204623 pound
*/

const meterInFeet = 3.28084
const litreInGallon = 0.2641729
const kiloInPounds = 2.204623

const inputEl = document.querySelector('#input-field')
const convertBtn = document.querySelector('#convert-btn')
const lengthUnit = document.querySelector('#length-unit-p')
const volUnit = document.querySelector('#vol-unit-p')
const massUnit = document.querySelector('#mass-unit-p')


convertBtn.addEventListener('click', function() {
    let inputValue = inputEl.value
    convertUnits(inputValue)
})

function convertUnits(value) {
    let meterToFeet = (value * meterInFeet).toFixed(3)
    let litreToGallon = (value * litreInGallon).toFixed(3)
    let kilosToPounds = (value * kiloInPounds).toFixed(3)

    let feetToMeter = (value / meterInFeet).toFixed(3)
    let gallonToLitre = (value / litreInGallon).toFixed(3)
    let poundsToKilos = (value / kiloInPounds).toFixed(3)

    lengthUnit.innerText = `${value} meters = ${meterToFeet} feet | ${value} feet = ${feetToMeter} meters`
    volUnit.innerText = `${value} litres = ${litreToGallon} gallons | ${value} gallons = ${gallonToLitre} litres`
    massUnit.innerText = `${value} kilos = ${kilosToPounds} pounds | ${value} pounds = ${poundsToKilos} kilos`
}
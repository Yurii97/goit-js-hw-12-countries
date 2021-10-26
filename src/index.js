import './sass/main.scss';
import countryTemp from './templates/country.hbs'
import countriesTemp from './templates/countries.hbs'

const searchQuery = 'france';

const resultTemplate = document.querySelector('.result')

fetch(`https://restcountries.com/v2/name/${searchQuery}`)
        .then(response => {
            return response.json();
        })
        .then(country => {
            createTemplate(country);
        }).catch(error => {
            console.log(error);
        });
        

function createTemplate(country) {
    console.log(country);            
    if (country.length === 1) {
        console.log(country.length);
        resultTemplate.insertAdjacentHTML('beforeend', countryTemp(country))
        return;
    } resultTemplate.insertAdjacentHTML('beforeend', countriesTemp(country))
}
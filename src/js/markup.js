import countryTemp from '../templates/country.hbs'
import countriesTemp from '../templates/countries.hbs'
import clearMarkup from './cliner'

const resultTemplate = document.querySelector('.result')

function createTemplate(country) {
    if (country.length >= 10) {
        console.log('забагато');
        return;
    }  else if (country.length === 1){
        console.log(country.length);
        clearMarkup()
        resultTemplate.insertAdjacentHTML('beforeend', countryTemp(country));        
        return;
    } else {
        clearMarkup();
        resultTemplate.insertAdjacentHTML('beforeend', countriesTemp(country))
    }
}

export { resultTemplate };
export default createTemplate;

import countryTemp from '../templates/country.hbs'
import countriesTemp from '../templates/countries.hbs'
import clearMarkup from './cliner'
import specificQuery from './specific'

const resultTemplate = document.querySelector('.result')

function createTemplate(country) {
if (country.length === 1){
    clearMarkup()
    resultTemplate.insertAdjacentHTML('beforeend', countryTemp(country));        
    return;    
} else if (country.length > 1 && country.length <10) {
    clearMarkup();
    resultTemplate.insertAdjacentHTML('beforeend', countriesTemp(country))        
    return;    
} else {
    clearMarkup();
    specificQuery();    
    console.log('забагато');        
    }   
}

export { resultTemplate };
export default createTemplate;

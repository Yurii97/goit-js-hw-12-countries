import createTemplate from './markup'

function fetchCountries(ev) {
    return fetch(`https://restcountries.com/v2/name/${ev.target.value}`)
        .then(response => {
            return response.json();
        })
    .then(country => {
            createTemplate(country);
        }).catch(error => {
            console.log(error);
        });    
}

export default fetchCountries;
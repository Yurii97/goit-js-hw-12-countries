
function fetchCountries(text) {
    return fetch(`https://restcountries.com/v2/name/${text}`)
        .then(response => response.json());
}

export default fetchCountries;
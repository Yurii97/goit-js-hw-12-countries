
function fetchCountries(text) {
    return fetch(`https://restcountries.com/v2/name/${text}`)
        .then(response => {
            if (response.ok) return response.json();
            throw new Error('Eroor fetching data');
        });
}

export default fetchCountries;
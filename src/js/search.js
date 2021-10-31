import fetchCountries from './fetchCountries'
import createTemplate from './markup'
import onFetchError from './error'

function onSearch(ev) {
    const searchQuery = ev.target.value;

    // if (searchQuery === '') {
    //     return alert('Please enter the contry name')
    // }
    fetchCountries(searchQuery)
        .then(createTemplate)
        .catch(onFetchError);
}

export default onSearch;
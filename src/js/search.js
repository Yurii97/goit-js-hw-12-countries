import fetchCountries from './fetchCountries'
import createTemplate from './markup'
import onFetchError from './error'

function onSearch(ev) {
    const searchQuery = ev.target.value;
    
        fetchCountries(searchQuery)
            .then(createTemplate)
            .catch(onFetchError);    
}

export default onSearch;
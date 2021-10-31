import './sass/main.scss';
import onSearch from './js/search'

const _ = require('lodash');

const findCountryRef = document
    .querySelector('#find-country');


findCountryRef.addEventListener('input',
    _.debounce(onSearch, 1000));



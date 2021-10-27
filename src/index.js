import './sass/main.scss';
import fetchCountries from './js/fetchCountries'

const _ = require('lodash');


const findCountryRef = document.querySelector('#find-country');
findCountryRef.addEventListener('input', _.debounce(fetchCountries, 2000));





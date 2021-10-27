import countryTemp from '../templates/country.hbs'
import countriesTemp from '../templates/countries.hbs'
import clearMarkup from './cliner'

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
    // showStackTopLeft('error');
//     PNotify.error({
//   title: 'Oh No!',
//   text: 'Something terrible happened.'
// });
    console.log('забагато');        
    }   
}

export { resultTemplate };
export default createTemplate;


// function showStackTopLeft(type) {
//   if (typeof window.stackTopLeft === 'undefined') {
//     window.stackTopLeft = new PNotify.Stack({
//       dir1: 'down',
//       dir2: 'right',
//       firstpos1: 25,
//       firstpos2: 25,
//       push: 'top',
//       maxStrategy: 'close'
//     });
//   }
//   const opts = {
//     title: 'Over Here',
//     text: "Check me out. I'm in a different stack.",
//     stack: window.stackTopLeft
//   };
//   switch (type) {
//     case 'error':
//       opts.title = 'Oh No';
//       opts.text = 'Watch out for that water tower!';
//       opts.type = 'error';
//       break;
//     case 'info':
//       opts.title = 'Breaking News';
//       opts.text = 'Have you met Ted?';
//       opts.type = 'info';
//       break;
//     case 'success':
//       opts.title = 'Good News Everyone';
//       opts.text =
//         "I've invented a device that bites shiny metal asses.";
//       opts.type = 'success';
//       break;
//   }
//   PNotify.alert(opts);
// }
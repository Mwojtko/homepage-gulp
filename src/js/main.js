"use strict";

import moment from 'moment';

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))

console.log(`Siema!`);
console.log(`Witam Cię na mojej stronie!`)
//const name=`Mikołaj Wojtkowiak`;
//const age=26;
//console.log(`Pozdrawiam serdecznie ${name} w wieku ${age}`);

const about = document.querySelector(`.about__paragraph--js`);
if (about) 
{ 
console.log(about.innerHTML);
about.innerHTML = ('Pozdrawia JavaScript!'); 
}


const description = document.querySelector(`.about__paragraph--js2`);
if (description) 
{ 
console.log(description.innerHTML);
description.innerHTML = (`Tutaj też pozdrawia JavaScript!`); 
}



function welcome (age, name) {
    if (age<26) {
        console.log(`${name} Jesteś młodszy ode mnie!`)
    } if (age>26) {
        console.log(`${name} Jesteś starszy ode mnie!`)
    } if (age==26) {
        console.log(` ${name} Jesteś w moim wieku!`)
    }
}

const welcome2 = (name, age) => {
    console.log(`Witaj ${name} widzę że masz ${age} lat!`)
}

welcome2 ('Mikołaj', 26);

const myName = 'Mikołaj';
const myAge = 26;

welcome2(myName,myAge);


//Funkcje dotyczące przycisku na stronie:

const button = document.querySelector('.header__button--js'); //Tutaj powiązano przycisk utworzony z HTML do JS

//function handleClick() {}   // Tutaj zdefiniowano funkcje do klikniecia


//button.addEventListener('click', handleClick); //Tutaj dodano funkcję, do obslugi klikniecia 
                                                //Dodatkowo, tutaj jest zdefiniowany addEventListener jako type 'clik' oraz podanie nazwy funkcji

//Tu już właściwa funkcja wykonująca funkcję zamiany tekstu poprzez kliknięcie

//button.addEventListener('click', (e) => {                   //"Nasłuchuje" co ma się zmienic". Użycie funkcji Fat Arrow
    //const header = document.querySelector('.header--js');     //Tutaj jest odwołanie do zmienianego nagłówka
    //header.innerHTML = 'klik, klik!';  //Tutaj podmienia tekst
   // header.classList.toggle('header--red');        //Zmienia kolor podmienionego tekstu
//});


//Dokładanie przycisku "Hamburger Menu"

const navigationSwitcher = document.querySelector('.navigation__switcher--js')

navigationSwitcher.addEventListener('click', (e) => {
    const navigationList = document.querySelector('.navigation__list--js');
    navigationList.classList.toggle('navigation__list--visible'); //po kliknięciu w przycisk, wyswietla nawigację
                                                                    //navigation__list--visible jest tylko zdefiniowane w .css nie w html, bo dotyczy wyswietlania tylko w wersji mobilnej.
});








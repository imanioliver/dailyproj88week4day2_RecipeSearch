let boxOne = document.getElementById('itemOne');
let boxTwo = document.getElementById('itemTwo');
let boxThree = document.getElementById('itemThree');
let boxFour = document.getElementById('itemFour');
let boxFive = document.getElementById('itemFive');
let boxSix = document.getElementById('itemSix');
let boxSeven = document.getElementById('itemSeven');
let boxEight = document.getElementById('itemEight');

fetch("http://www.recipepuppy.com/api/?q=omelette")
    .then(function(response) {
        if (response.status !== 200) {
            console.log(response.status);
            return;
        }
        response.json().then(function(data) {
            console.log("test", response.url);
        });
    })
    .catch(function(err) {
        console.log("Fetch Error :-S", err);
    });

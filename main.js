let rowContainer = document.querySelector('.rowContainer');
// let container= document.querySelector('.container');
// let boxTwo = document.getElementById('itemTwo');
// let boxThree = document.getElementById('itemThree');
// let boxFour = document.getElementById('itemFour');
// let boxFive = document.getElementById('itemFive');
// let boxSix = document.getElementById('itemSix');
// let boxSeven = document.getElementById('itemSeven');
// let boxEight = document.getElementById('itemEight');
//

let searchForm = document.querySelector('.searchForm');

searchForm.addEventListener('submit', function(event){

    event.preventDefault();
    let query = document.getElementsByTagName('input');

    fetch("https://recipepuppyproxy.herokuapp.com/api/?i=onions,garlic&q="+ query[0].value)
        .then(function(response) {
            query[0].value = '';


            if (response.status !== 200) {
                console.log(response.status);
                return;
            }
            response.json().then(function(data) {
                // console.log("test", response.url);
                console.log("data", data);
                for (var i = 0; i < data.results.length; i++) {
                    let box = document.createElement('div')
                    box.classList.add('box');


                    box.innerHTML+=`<div> ${data.results[i].title}</div>`
                    if (data.results[i].thumbnail === ''){
                        box.innerHTML += `<a href='${data.results[i].href}'><img class="notFound" src=${"http://www.kickoff.com/chops/images/resized/large/no-image-found.jpg"}> </a>`
                    } else {
                        box.innerHTML+=`<a href='${data.results[i].href}'><img  src='${data.results[i].thumbnail}'> </a>`
                    }

                    rowContainer.appendChild(box);


                }


            });


        })
        .catch(function(err) {
            console.log("Fetch Error :-S", err);

            // boxOne.innerHTML+= `<p>${foodData.results[0].title}</p>`
        });


})

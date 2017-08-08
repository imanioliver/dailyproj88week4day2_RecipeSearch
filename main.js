let rowContainer = document.querySelector('.rowContainer');
let searchForm = document.querySelector('.searchForm');

searchForm.addEventListener('submit', function(event){

    event.preventDefault();
    let query = document.getElementsByTagName('input');

    rowContainer.innerHTML = '';
    fetch("https://recipepuppyproxy.herokuapp.com/api/?q="+ query[0].value)
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

                if (data.results.length === 0){
                    rowContainer.innerHTML += `<h3>Oops! We couldn't find any results that matched your search! Please try searching for another recipe ingredient! 🍽️😋 🍲</h3>`;
                }


            });


        })
        .catch(function(err) {
            console.log("Fetch Error :-S", err);
        });


})

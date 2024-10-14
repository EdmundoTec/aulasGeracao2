//https://randomuser.me/api
// let api = fetch('https://randomuser.me/api/?results=10');

let users = [];

const cardContainer = document.getElementById('user-cards')

function fetchUsers () {
fetch('https://randomuser.me/api/?results=16')
.then( response => response.json())
.then(data => {
        // console.log(data.results[1].phone)
        users = data.results
        displayUsers(users)
    });
}
//.catch( error => console.error('error:', error ))

function displayUsers(users) {

    let cards = '';

    users.forEach(users => {
        cards += 
        // `
        // <div class="card" style="width: 18rem;">
        //     <img src="${users.picture.large}" class="card-img-top rounded-circle mx-auto mt-3" alt="Foto de ${users.name.first}" style="width: 100px; height: 100px; object-fit: cover;">
        //     <div class="card-body">
        //         <h5 class="card-name">${users.name.first}</h5>
        //         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //         <a href="#" class="btn btn-primary">Go somewhere</a>
        //     </div>
        // </div>
        // `

        `
             <div class="col-md-4 col-lg-3">
                <div class="card h-100 shadow-sm">
                  <img src="${users.picture.large}" class="card-img-top rounded-circle mx-auto mt-3" alt="Foto de ${users.name.first}" style="width: 100px; height: 100px; object-fit: cover;">
                  <div class="card-body text-center">
                    <h5 class="card-title">${users.name.first} ${users.name.last}</h5>
                    <p class="card-text"><strong>Email:</strong> ${users.email}</p>
                    <p class="card-text"><strong>Telefone:</strong> ${users.phone}</p>
                    <p class="card-text"><strong>País:</strong> ${users.location.country}</p>
                  </div>
                </div>
              </div>
        `
    });

    cardContainer.innerHTML = cards;
}


fetchUsers();
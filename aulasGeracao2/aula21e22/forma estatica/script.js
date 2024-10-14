// Função para buscar um único usuário da API
function fetchUser() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0]; // Pega o primeiro usuário do resultado
            displayUser(user); // Chama a função para preencher o card
        })
        .catch(error => console.log('Erro ao buscar usuário:', error));
}

// Função para preencher os campos com os dados do usuário
function displayUser(user) {
    document.getElementById('user-img').src = user.picture.large;
    document.getElementById('user-img').alt = `Foto de ${user.name.first}`;
    document.getElementById('user-name').textContent = `${user.name.first} ${user.name.last}`;
    document.getElementById('user-email').textContent = user.email;
    document.getElementById('user-phone').textContent = user.phone;
    document.getElementById('user-country').textContent = user.location.country;
}

// Chama a função ao carregar a página
window.onload = fetchUser;

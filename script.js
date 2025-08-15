document.addEventListener('DOMContentLoaded', carregarUsuarios);

const form = document.getElementById('form-cadastro');
const tabela = document.querySelector('#tabela-usuarios tbody');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value;

    if (!nome || !email || !senha) {
        alert('Preencha todos os campos!');
        return;
    }

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios.push({ nome, email });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    form.reset();
    carregarUsuarios();
});

function carregarUsuarios() {
    tabela.innerHTML = '';
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    usuarios.forEach(usuario => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${usuario.nome}</td>
            <td>${usuario.email}</td>
        `;
        tabela.appendChild(tr);
    });
}

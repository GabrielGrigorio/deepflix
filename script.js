// script.js

// URL do filme que você deseja reproduzir
const movieUrl = "https://files.fm/u/bwefjknrhh"; // Substitua pelo link real do filme

// Captura o botão de reprodução
const playButton = document.getElementById('playButton');

// Adiciona um evento de clique ao botão
playButton.addEventListener('click', function() {
    // Redireciona para a URL do filme
    window.location.href = movieUrl;
});

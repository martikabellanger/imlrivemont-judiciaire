document.getElementById('demande-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const medecin = document.getElementById('ref-medecin-doc').value.trim();
    const cle = document.getElementById('cle-auth-doc').value.trim();
    if (medecin === '5523180096' && cle === 'vanterin_rivemont_2008') {
        window.location.href = 'resultat.html';
    } else {
        document.getElementById('error-message-doc').textContent = 'Erreur dans les informations saisies.';
    }
});

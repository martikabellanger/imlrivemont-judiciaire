document.getElementById('requete-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const dossier = document.getElementById('ref-dossier').value.trim();
    const medecin = document.getElementById('ref-medecin').value.trim();
    const cle = document.getElementById('cle-auth').value.trim();
    if (dossier === '366091' && medecin === '9820014342' && cle === 'vanterin_rivemont_2024') {
        window.location.href = 'resultat.html';
    } else {
        document.getElementById('error-message').textContent = 'Erreur dans les informations saisies.';
    }
});


document.addEventListener("DOMContentLoaded", function() {
    // Identifiants prédéfinis pour l'administrateur
    const adminCredentials = {
        username: "admin",
        password: "admin123"
    };

     //Identifiants pour un exemple de vendeur (vous pouvez adapter cette logique)
    const vendeurCredentials = {
        username: "vendeur1",
        password: "vendeur123"
    };

    // Validation des informations de connexion
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Empêche le formulaire d'être soumis

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const errorMessage = document.getElementById("error-message");

        // Vérifier si l'utilisateur est l'administrateur
        if (username === adminCredentials.username && password === adminCredentials.password) {
            // Rediriger vers la page d'administration
            window.location.href = "administration.html";
        }

        // Vérifier si l'utilisateur est un vendeur
        else if (username === vendeurCredentials.username && password === vendeurCredentials.password) {
            // Rediriger vers la page d'accueil du vendeur
            window.location.href = "accueilVendeur.html";
        }

        // Si les informations sont incorrectes
        else {
            errorMessage.textContent = "Identifiant ou mot de passe incorrect.";
        }
    });
});





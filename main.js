// La fonction `updateList()` met à jour la liste des titres en fonction de leur position sur la page.
function updateList() {
    // Sélectionne tous les éléments h1 et h2 de la page et les trie en fonction de leur position verticale.
    const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
        return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
    });

    // Supprime la classe "selected-circle" de tous les éléments ayant la classe "selected-circle".
    document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove("selected-circle"));

    // Ajoute la classe "selected-circle" à l'élément .nav-dot correspondant au premier titre de la liste.
    document.querySelectorAll(".nav-dot")[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add("selected-circle");
}

// Appelle la fonction `updateList()` une fois au chargement initial de la page pour mettre à jour les titres visibles.
updateList();

// Ajoute un écouteur d'événement pour mettre à jour les titres visibles à chaque fois que l'utilisateur fait défiler la page.
window.addEventListener('scroll', () => {
    updateList();
});

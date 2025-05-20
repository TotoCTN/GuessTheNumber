function Guessnumb() {
  const nombreMystere = Math.floor(Math.random() * 10) + 1;
  let essaisRestants = 3;
  let gagne = false;

  while (essaisRestants > 0) {
    let reponse = prompt(
      `Devine le nombre entre 1 et 10\nTu as encore ${essaisRestants} essai(s).`
    );

    let proposition = parseInt(reponse);

    if (proposition === nombreMystere) {
      alert("Bravo, tu as trouvé le nombre mystère !");
      gagne = true;
      break;
    } else {
      essaisRestants--;
      if (essaisRestants > 0) {
        alert(" Mauvaise réponse. Essaie encore !");
      }
    }
  }

  if (!gagne) {
    alert(`Tu as perdu. Le nombre mystère était ${nombreMystere}.`);
  }
  Guessnumb();
}
Guessnumb();

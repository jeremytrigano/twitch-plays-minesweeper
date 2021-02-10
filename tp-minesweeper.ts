export default class TwitchPlaysMinesweeper {
  game: Array<Array<number>>;
  niveaux = {
    débutant: { lignes: 9, colonnes: 9, mines: 10 },
    intermédiaire: { lignes: 16, colonnes: 16, mines: 40 },
    expert: { lignes: 16, colonnes: 30, mines: 99 },
  };

  constructor() {
    this.game = Array();
  }

  selectionNiveau(niveau) {
    this.game = Array(this.niveaux[niveau].lignes)
      .fill(0)
      .map((line) => Array(this.niveaux[niveau].colonnes).fill(0));
  }

  generationMines(niveau) {
    const lignes = this.niveaux[niveau].lignes;
    const colonnes = this.niveaux[niveau].colonnes;
    const mines = this.niveaux[niveau].mines;
    let coordonnees = Array();

    for (let numLigne = 0; numLigne < lignes; numLigne++) {
      for (let numColonne = 0; numColonne < colonnes; numColonne++) {
        coordonnees.push([numLigne, numColonne]);
      }
    }

    for (let numMine = 0; numMine < mines; numMine++) {
      // Math.floor(Math.random() * coordonnees.length);
      const positionCoordMine = Math.floor(Math.random() * coordonnees.length);
      const coordMine = coordonnees[positionCoordMine];
      this.game[coordMine[0]][coordMine[1]] = 9;
      coordonnees.splice(positionCoordMine, 1);
    }
  }
}

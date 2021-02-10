export default class TwitchPlaysMinesweeper {
  game: Array<Array<number>>;
  niveaux = {
    débutant: { ligne: 9, colonne: 9 },
    intermédiaire: { ligne: 16, colonne: 16 },
    expert: { ligne: 16, colonne: 30 },
  };

  constructor() {
    this.game = Array();
  }

  selectionNiveau(niveau) {
    this.game = Array(this.niveaux[niveau].ligne)
      .fill(0)
      .map((line) => Array(this.niveaux[niveau].colonne).fill(0));
  }
}

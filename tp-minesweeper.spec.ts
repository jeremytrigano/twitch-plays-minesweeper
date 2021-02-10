import TwitchPlaysMinesweeper from './tp-minesweeper';

let tpm: TwitchPlaysMinesweeper;

beforeEach(() => {
  tpm = new TwitchPlaysMinesweeper();
});

test('doit créer une grille vide', () => {
  expect(tpm.game).toHaveLength(0);
});

test('doit créer une grille débutant de 9x9 éléments', () => {
  tpm.selectionNiveau('débutant');
  expect(tpm.game).toHaveLength(9);
  tpm.game.forEach((ligne) => expect(ligne).toHaveLength(9));
});

test('doit créer une grille intermédiaire de 16x16 éléments', () => {
  tpm.selectionNiveau('intermédiaire');
  expect(tpm.game).toHaveLength(16);
  tpm.game.forEach((ligne) => expect(ligne).toHaveLength(16));
});

test('doit créer une grille expert de 30x16 éléments', () => {
  tpm.selectionNiveau('expert');
  expect(tpm.game).toHaveLength(16);
  tpm.game.forEach((ligne) => expect(ligne).toHaveLength(30));
});

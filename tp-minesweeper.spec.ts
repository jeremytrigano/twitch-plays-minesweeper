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

test('une grille débutant doit contenir 10 mines', () => {
  let cptMines = 0;
  tpm.selectionNiveau('débutant');
  tpm.generationMines('débutant');
  tpm.game.forEach((ligne) => {
    ligne.forEach((cellule) => {
      if (cellule == 9) {
        cptMines++;
      }
    });
  });
  expect(cptMines).toBe(10);
});
test('une grille intermédiaire doit contenir 40 mines', () => {
  let cptMines = 0;
  tpm.selectionNiveau('intermédiaire');
  tpm.generationMines('intermédiaire');
  tpm.game.forEach((ligne) => {
    ligne.forEach((cellule) => {
      if (cellule == 9) {
        cptMines++;
      }
    });
  });
  expect(cptMines).toBe(40);
});
test('une grille expert doit contenir 99 mines', () => {
  let cptMines = 0;
  tpm.selectionNiveau('expert');
  tpm.generationMines('expert');
  tpm.game.forEach((ligne) => {
    ligne.forEach((cellule) => {
      if (cellule == 9) {
        cptMines++;
      }
    });
  });
  expect(cptMines).toBe(99);
});

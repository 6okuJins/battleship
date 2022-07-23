import { Ai } from '../classes';

let ai;
const testArray = new Array(100).fill().map((_, index) => index);

describe('getMoves()', () => {
  beforeEach(() => {
    ai = Ai();
  });
  test('if it returns a full array of moves', () => {
    expect(ai.getMoves().includes(...testArray)).toBeTruthy();
  })
  test('if it returns a differently randomized array each time', () => {
    const ai1 = Ai();
    expect(ai.getMoves().every((value, index) => value === ai1[index])).toBeFalsy();
    expect(ai1.getMoves().includes(...testArray)).toBeTruthy();
  })
});

describe('getMove()', () => {
  beforeEach(() => {
    ai = Ai();
  });
  test('if it returns a move', () => {
    expect(typeof ai.getMove() == 'number').toBeTruthy();
  });
  test('if it returns different moves', () => {
    expect(ai.getMove() != ai.getMove()).toBeTruthy();
    expect(ai.getMoves().length <= 100).toBeTruthy();
  })
});
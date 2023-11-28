const { HardDeck, WeakDeck } = require('../../Deck/index.js');
const Stack = require('../Stack.js');

describe('Stack 테스트', () => {
  it.each([
    {
      decks: [
        { name: 'U', deck: HardDeck.of() },
        { name: 'L', deck: WeakDeck.of() },
      ],
      throughLane: 'U',
      expected: {
        result: true,
        stacks: ['O', ' '],
      },
    },
    {
      decks: [
        { name: 'U', deck: WeakDeck.of() },
        { name: 'L', deck: HardDeck.of() },
      ],
      throughLane: 'U',
      expected: {
        result: false,
        stacks: ['X', ' '],
      },
    },
    {
      decks: [
        { name: 'U', deck: WeakDeck.of() },
        { name: 'L', deck: HardDeck.of() },
      ],
      throughLane: 'L',
      expected: {
        result: true,
        stacks: [' ', 'O'],
      },
    },
    {
      decks: [
        { name: 'U', deck: HardDeck.of() },
        { name: 'L', deck: WeakDeck.of() },
      ],
      throughLane: 'L',
      expected: {
        result: false,
        stacks: [' ', 'X'],
      },
    },
  ])(
    '`through`는 입력받은 `lane`의 `stack`을 `trampled`한다.',
    ({ decks, throughLane, expected }) => {
      // given
      const stack = Stack.of(decks);

      // when
      const result = stack.through(throughLane);

      expect(result).toEqual(expected);
    },
  );
});

const Stack = require('../Stack/Stack.js');

class Bridge {
  /**
   * @readonly
   */
  static LANE_NAMES = {
    up: 'U',
    down: 'D',
  };

  /**
   * @type {Stack[]}
   */
  #stacks;

  #index = 0;

  #log = [];

  constructor(stacks) {
    this.#stacks = stacks;
  }

  static of(stacks) {
    return new Bridge(stacks);
  }

  cross(lane) {
    const { result, stacks } = this.#stacks[this.#index].through(lane);
    this.#log.push(stacks);
    this.#index += 1;

    return {
      result,
      log: this.#log,
    };
  }

  isCompleted() {
    return this.#stacks.length === this.#index;
  }

  init() {
    this.#stacks.forEach((stack) => stack.init());
  }
}

module.exports = Bridge;

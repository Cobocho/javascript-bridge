class Deck {
  static DEFAULT_STATE = ' ';

  /**
   * @protected
   */
  state = Deck.DEFAULT_STATE;

  /**
   * @abstract
   */
  trampled() {}
}

module.exports = Deck;

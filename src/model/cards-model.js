import { generateFilmCard } from '../mock/data.js';
import { generetIdIndex } from '../utils/utils.js';

const FILM_CARDS_QUANTITY = 33;

export default class CardsModel {

  #cards = Array.from({ length: FILM_CARDS_QUANTITY }, generateFilmCard).map(generetIdIndex);

  get cards() {
    return this.#cards;
  }
}

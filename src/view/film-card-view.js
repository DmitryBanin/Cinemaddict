import AbstractView from '../framework/view/abstract-view.js';
import dayjs from 'dayjs';

const createFilmCardTemplate = (filmcard) => {
  const { filmInfo, userDetails, comments } = filmcard;
  const { release, title, poster, totalRating, genre, description, runTime } = filmInfo;
  const { date } = release;
  const durationFormat = dayjs.duration(runTime, 'minutes').format('H[h] m[m]');
  const yearFormat = dayjs(date).format('YYYY');
  const { watchlist, watched, favorite } = userDetails;
  const watchlistSelect = watchlist ? ' ' : 'film-card__controls-item--active';
  const watchedSelect = watched ? ' ' : 'film-card__controls-item--active';
  const favoriteSelect = favorite ? ' ' : 'film-card__controls-item--active';
  const commentsSelect = comments.length;
  const getDescription = (count) => {
    if (count.length > 139) {
      return `${count.slice(0, 139)}...`;
    }
    return count;
  };
  const descriptionSelect = getDescription(description);

  return (
    `<article class="film-card">
      <a class="film-card__link">
        <h3 class="film-card__title">${title}</h3>
        <p class="film-card__rating">${totalRating}</p>
        <p class="film-card__info">
          <span class="film-card__year">${yearFormat}</span>
          <span class="film-card__duration">${durationFormat}</span>
          <span class="film-card__genre">${genre}</span>
        </p>
        <img src="${poster}" alt="" class="film-card__poster">
        <p class="film-card__description">${descriptionSelect}</p>
        <span class="film-card__comments">${commentsSelect} comments</span>
      </a>
      <div class="film-card__controls">
        <button class="film-card__controls-item film-card__controls-item--add-to-watchlist ${watchlistSelect}" type="button">Add to watchlist</button>
        <button class="film-card__controls-item film-card__controls-item--mark-as-watched ${watchedSelect}" type="button">Mark as watched</button>
        <button class="film-card__controls-item film-card__controls-item--favorite ${favoriteSelect}" type="button">Mark as favorite</button>
      </div>
    </article>`
  );
};

export default class FilmCardView extends AbstractView {
  #filmCard = null;

  constructor(filmCard) {
    super();
    this.#filmCard = filmCard;
  }

  get template() {
    return createFilmCardTemplate(this.#filmCard);
  }

  setFilmCardClickHandler = (callback) => {
    this._callback.filmCardClick = callback;
    this.element.querySelector('.film-card__link').addEventListener('click', this.#filmCardClickHandler);
  };

  setWatchlistClickHandler = (callback) => {
    this._callback.watchlistClick = callback;
    this.element.querySelector('.film-card__controls-item--add-to-watchlist').addEventListener('click', this.#watchlistClickHandler);
  };

  setWatchedClickHandler = (callback) => {
    this._callback.watchedClick = callback;
    this.element.querySelector('.film-card__controls-item--mark-as-watched').addEventListener('click', this.#watchedClickHandler);
  };

  setFavoriteClickHandler = (callback) => {
    this._callback.favoriteClick = callback;
    this.element.querySelector('.film-card__controls-item--favorite').addEventListener('click', this.#favoriteClickHandler);
  };

  #filmCardClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.filmCardClick();
  };

  #watchlistClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.watchlistClick(this.#filmCard);
  };

  #watchedClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.watchedClick(this.#filmCard);
  };

  #favoriteClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.favoriteClick(this.#filmCard);
  };
}

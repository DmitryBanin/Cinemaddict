// функция рандомного целого числа
export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

// функция для рандомного дробного числа
export const getRandomFloat = (min, max, digits = 1) => (Math.random() * (max - min) + min).toFixed(digits);

// функция рандомного индекса массива
export const getRandomElement = (elements) => elements [getRandomInteger(0, elements.length - 1)];

// функция рандомного индекса из списка
export const getRandomIndexFromList = (list, count) => {
  const result = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = getRandomInteger(0, list.length-1);
    result.push(list[randomIndex]);
  }
  return result;
};

// функция присвоения id по индексу
export const generetIdIndex = (element, index) => {
  element.id = index;
  return element;
};

// функция рандомной даты
export const getRandomDate = (start, end) => {
  start = new Date(start).getTime();
  end = new Date(end).getTime();
  return  new Date(start + Math.random() * (end - start));
};

// функция перевода минут в часы

export const getTimeFromMins = (min) => {
  const HOURS = Math.trunc(min / 60);
  const MINUTES = min % 60;
  if (HOURS === 0) {
    return `${MINUTES}m`;
  } else {
    return `${HOURS}h ${MINUTES}m`;
  }
};

// функция рандомного индекса id комментария
export const getRandomIndexForComments = (list, count) => {
  const result = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = getRandomInteger(0, list.length-1);
    result.push(list[randomIndex].id);
  }
  return result;
};

// функция генрации id вкарточке фильма
export const genereteCommenatIdInFilmCard = (filmComments, filmCards, numberOfCommentsOnFilm) => {

  const generetCommentsCard = (element) => {
    element.comments = getRandomIndexForComments(filmComments, getRandomInteger(numberOfCommentsOnFilm));
    return element;
  };

  filmCards.map(generetCommentsCard);
  return filmCards;
};

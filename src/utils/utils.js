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
export const genereteCommentIdInFilmCard = (filmComments, filmCards, numberOfCommentsOnFilm) => {

  const generetCommentsCard = (element) => {
    element.comments = getRandomIndexForComments(filmComments, getRandomInteger(numberOfCommentsOnFilm));
    return element;
  };

  filmCards.map(generetCommentsCard);
  return filmCards;
};

export const updateItem = (items, update) => {
  const index = items.findIndex((item) => item.id === update.id);

  if (index === -1) {
    return items;
  }

  return [
    ...items.slice(0, index),
    update,
    ...items.slice(index + 1),
  ];
};

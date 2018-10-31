'use strict';

const listValidator = store => next => action => {
  const isList = action.type;

  if (isList) {
    try {
      const list = action.payload;
      let notValid = !list.title
      if (notValid) {
        throw new Error('VALIDATION ERROR: list must include a name')
      }

      return next(action);

    } catch (err) {
      console.error(err);
    }
  } else {
    return next(action);
  };
};

export default listValidator;
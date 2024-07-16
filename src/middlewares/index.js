export const logger = (store) => (next) => (action) => {
  console.log(action);
  next(action);
}

/**
 * Add custom pokemon
 * @param store
 * @return {function(*): function(*): void}
 */
export const featuring = (store) => (next) => (action) => {
  const featured = [{name: 'Custom Pokemon'},  ...action.action.payload];
  const updatedAction = {
    ...action,
    action: {...action.action, payload: featured}
  }

  next(updatedAction);
}
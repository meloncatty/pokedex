export const typesAreLoading = (initialState = false, action) => {
  switch (action.type) {
    case 'TYPES_ARE_LOADING':
      return action.isLoading
    default:
      return initialState
  }
}

export const typesHaveErrored = (initialState = false, action) => {
  switch (action.type) {
    case 'TYPES_HAVE_ERRORED':
      return action.isErrored
    default:
      return initialState
  }
}

export const typesSuccess = (initialState = [], action) => {
  switch (action.type) {
    case 'TYPES_SUCCESS':
      return [...action.typesList]
    default:
      return initialState
  }
}

export const categorizedIsLoading = (initialState = false, action) => {
  switch (action.type) {
    case 'CATEGORIZED_IS_LOADING':
      return action.isLoading
    default:
      return initialState
  }
}

export const categorizedHasErrored = (initialState = false, action) => {
  switch (action.type) {
    case 'CATEGORIZED_HAS_ERRORED':
      return action.hasErrored
    default:
      return initialState
  }
}

export const categorizedSuccess = (initialState = [], action) => {
  switch (action.type) {
    case 'CATEGORIZED_SUCCESS':
      return [action.pokemon]
    default:
      return initialState
  }
}

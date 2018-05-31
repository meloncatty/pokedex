export const typesAreLoading = (bool) => ({
  type: 'TYPES_ARE_LOADING',
  isLoading: bool
})

export const typesHaveErrored = (bool) => ({
  type: 'TYPES_HAVE_ERRORED',
  isErrored: bool
})

export const typesSuccess = (typesList) => ({
  type: 'TYPES_SUCCESS',
  typesList
})

export const categorizedIsLoading = (bool) => ({
  type: 'CATEGORIZED_IS_LOADING',
  catIsLoading: bool
})

export const categorizedHasErrored = (bool) => ({
  type: 'CATEGORIZED_HAS_ERRORED',
  catHasErrored: bool
})

export const categorizedSuccess = (pokemon) => ({
  type: 'CATEGORIZED_SUCCESS',
  pokemon,
  log: console.log(pokemon)
})

export function typeThunk() {
  return (dispatch) => {
    dispatch(typesAreLoading(true))
    const url = 'http://localhost:3001/types'
    return fetch(url)
      .then(response => {
        if(!response.ok) {
          throw Error(response.statusText)
        }
        dispatch(typesAreLoading(false))
        return response
      })
      .then(response => response.json())
      .then(types => dispatch(typesSuccess(types)))
      .catch(() => dispatch(typesHaveErrored(true)))
  }
}

export function categorizeThunk(id) {
  return (dispatch) => {
    dispatch(categorizedIsLoading(true))
    const url = 'http://localhost:3001/pokemon/' + id
    return fetch(url)
      .then(response => {
        if(!response.ok) {
          throw Error(response.statusText)
        }
        dispatch(categorizedIsLoading(false))
        return response
      })
      .then(response => response.json())
      .then(pokemon => Promise.all(dispatch(categorizedSuccess(pokemon))))
      .catch(() => dispatch(categorizedHasErrored(true)))
  }
}

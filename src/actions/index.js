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

export const categorizedMons = (mons) => ({
  type: 'CATEGORIZED_MONS',
  specificTypes: mons
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
    dispatch(typesAreLoading(true))
    const url = 'http://localhost:3001/types${id}'
    return fetch(url)
      .then(response => {
        if(!response.ok) {
          throw Error(response.statusText)
        }
        dispatch(typesAreLoading(false))
        return response
      })
      .then(response => response.json())
      .then(mons => dispatch(categorizedMons(mons)))
      .catch(() => dispatch(typesHaveErrored(true)))
  }
}

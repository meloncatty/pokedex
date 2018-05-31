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

export const typeThunk = () => {
  return async (dispatch) => {
    dispatch(typesAreLoading)
    const url = 'http://localhost:3001/types'
    fetch(url).then(response => response.json())
  }
}

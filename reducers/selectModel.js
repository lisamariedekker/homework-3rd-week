const reducer = (state = null, action = {}) => {
  console.log("Hey!")
  switch (action.type) {
  case 'SELECT_MODEL':
    return action.payload
  default:
    return state
  }
}

export default reducer
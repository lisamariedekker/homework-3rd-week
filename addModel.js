const redux = require('redux')

const initialState = [

]

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case 'ADD_MODEL':
    return [
      ...state,
      action.payload
    ]

    case 'SET_MODEL':
    return action.payload.map(model => ({...model}))

  default:
    return state
  }
}

const store = redux.createStore(reducer)
console.log('Initial state of the store', store.getState())

store.subscribe(() => console.log('Next state:', store.getState()))

const action = {
  type: 'ADD_MODEL',
  payload: {
    name: "",
    manufacturer: "",
    year: 0,
    origin: ""
  }
}

store.dispatch(action)

export default reducer
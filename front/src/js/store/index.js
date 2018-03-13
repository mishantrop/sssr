import { combineReducers } from 'redux'
import * as rootReducer from './reducers'
import configureStore from './configureStore'

export const store = configureStore(rootReducer)

export const replace = reducers => store.replaceReducer(combineReducers(reducers))

export const inject = (name, reduce) => {
  rootReducer[name] = reduce
  replace(rootReducer)
}

export const remove = name => {
  rootReducer[name] = undefined
  replace(rootReducer)
}

export default {
  inject,
  remove,
  replace,
  store,
}

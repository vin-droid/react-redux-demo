import { UPDATE_SEARCH_KEY, UPDATE_RECIPES } from '../constants';
const initialState = {
    searchkey: '',
    recipes: []
}

export function RecipeApp(state = initialState, action) {
    // For now, don't handle any actions
    // and just return the state given to us.
    switch (action.type) {
        case UPDATE_SEARCH_KEY:
          return Object.assign({}, state, {
            searchkey: action.searchkey
          })
        case UPDATE_RECIPES:
          return Object.assign({}, state, {
            recipes: action.items
          })
        default:
          return state
      }
    return state
  }
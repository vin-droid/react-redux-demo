import { UPDATE_SEARCH_KEY, UPDATE_RECIPES, UPDATE_TOASTER } from '../constants';
const initialState = {
    searchKey: '',
    toasterOpts: {},
    recipes: []
}

export function RecipeApp(state = initialState, action) {
  // For now, don't handle any actions
  // and just return the state given to us.
  switch (action.type) {
      case UPDATE_SEARCH_KEY:
        return Object.assign({}, state, {
          searchKey: action.searchKey
        })
      case UPDATE_RECIPES:
        return Object.assign({}, state, {
          recipes: action.items
        })
      case UPDATE_TOASTER:
        return Object.assign({},state,{
          toasterOpts: action.toasterOpts
        })
      default:
        return state
    }
  return state
}
import { UPDATE_SEARCH_KEY, UPDATE_RECIPES } from '../constants';

/*
* action creators
*/
export function updateSeachKey(searchKey) {
    return {
    'type': UPDATE_SEARCH_KEY,
    searchKey
    }
}

export function updateRecipes(items) {
  return {
    'type': UPDATE_RECIPES,
    items
  }
}
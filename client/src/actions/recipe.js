import { UPDATE_SEARCH_KEY, UPDATE_RECIPES, UPDATE_TOASTER } from '../constants';

/*
* action creators
*/
export function updateSeachKey(searchKey) {
    return {
    'type': UPDATE_SEARCH_KEY,
    searchKey
    }
}
export function updateToaster(toasterOpts){
	return{
		'type': UPDATE_TOASTER,
		toasterOpts
	}
}

export function updateRecipes(items) {
  return {
    'type': UPDATE_RECIPES,
    items
  }
}
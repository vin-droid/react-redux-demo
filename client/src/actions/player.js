import { UPDATE_PLAYER_LIST } from '../constants';

/*
* action creators
*/
    
export function updatePlayerList(players) {
    console.log("action",players);
    return {
    'type': UPDATE_PLAYER_LIST,
    players
    }
}
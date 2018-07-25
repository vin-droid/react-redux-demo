import { FETCH_PLAYERS } from '../constants';

/*
* action creators
*/
    
export function fetchPlayers(players) {
    return {
    'type': FETCH_PLAYERS,
    players
    }
}
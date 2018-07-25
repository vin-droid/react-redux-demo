import {FETCH_PLAYERS} from '../constants';
const initialState = {
    players: []
}

export function Player(state = initialState, action){
    switch(action.type){
        case FETCH_PLAYERS:
            return Object.assign({}, state, {
                playes: action.players
            })
        default:
            return state
    }
    return state;
}
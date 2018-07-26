import {UPDATE_PLAYER_LIST} from '../constants';
const initialState = {
    players: []
}

export function Player(state = initialState, action){
    switch(action.type){
        case UPDATE_PLAYER_LIST:
            return Object.assign({}, state, {
                players: action.players
            })
        default:
            return state
    }
    return state;
}
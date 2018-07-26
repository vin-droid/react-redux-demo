import { UPDATE_PLAYER_LIST } from '../constants';

export function updatePlayerList(players) {
    return {
    'type': UPDATE_PLAYER_LIST,
    players
    }
}
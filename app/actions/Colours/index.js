export const SELECT_COLOUR = 'SELECT_COLOUR';
export const DESELECT_COLOUR = 'DESELECT_COLOUR';

export function selectColour(colourID){
    console.log('selecting colour', colourID);
    return {
        type: SELECT_COLOUR,
        payload: colourID
    }
}

export function deselectColour(colourID) {
    return {
        type: DESELECT_COLOUR,
        payload: colourID
    }
}
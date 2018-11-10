const START_DRAG = 'START_DRAG';
const STOP_DRAG = 'STOP_DRAG';

export function startDrag(elem){
    return {
        type: START_DRAG,
        payload: elem
    }
};

export function stopDrag(elem) {
    return {
        type: STOP_DRAG,
        payload: elem
    }
};
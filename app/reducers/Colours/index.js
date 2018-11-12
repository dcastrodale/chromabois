import { SELECT_COLOUR, DESELECT_COLOUR } from '../../actions/Colours';

const initialState = {
    available: [
        {
            r: 256,
            g: 0,
            b: 0,
            name: 'red',
            id: 0
        },
        {
            r: 0,
            g: 256,
            b: 0,
            name: 'green',
            id: 1
        },
        {
            r: 0,
            g: 0,
            b: 256,
            name: 'blue',
            id: 2
        }
    ],
    selected: [],
    averaged: {
        r: 238,
        g: 238,
        b: 238
    }
}

const getAveraged = (colours) => {
    return {
        r: (colours.reduce((total, colour) => total + colour.r, 0) / colours.length),
        g: (colours.reduce((total, colour) => total + colour.g, 0) / colours.length),
        b: (colours.reduce((total, colour) => total + colour.b, 0) / colours.length)
    }
}

export default (state = initialState, action) => {
    const { available, selected } = state;

    switch (action.type) {
        case SELECT_COLOUR:
            const selectedColour = available.filter(current => current.id === action.payload);
            console.log(selected.concat(...selectedColour));
            return {
                ...state,
                selected: selected.concat(...selectedColour),
                averaged: getAveraged(selected.concat(...selectedColour))
            }

        case DESELECT_COLOUR:
            return {
                ...state,
                selected: selected.filter(current => current.id !== action.payload),
                averaged: getAveraged(selected.filter(current => current.id !== action.payload))
            }
        default: return state;
    }
}
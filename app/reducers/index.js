import colours from './Colours';
import UI from './UI';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    colours,
    UI
});

export default rootReducer;
import { combineReducers } from 'redux';
import success from './successReducer';
import guessedWords from './guessedWordsReducer';
import secretWords from './secretWordReducer';

export default combineReducers({
    success,
    guessedWords,
    secretWords
});
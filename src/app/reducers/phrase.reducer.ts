import { IPhraseState } from '../models/phrase-state.interface';
import * as PhraseActions from './../actions/phrase.actions';

const defaultState: IPhraseState = {
    phrases: []
};

export function phraseReducer(state: IPhraseState = defaultState, action: PhraseActions.Actions) {
    const newState = { phrases: state.phrases.slice(0) };

    switch (action.type) {
        case PhraseActions.ADD_PHRASE:
            newState.phrases.push(action.payload);
            break;
        case PhraseActions.EDIT_PHRASE:
            newState.phrases[action.index] = action.payload;
            break;
        case PhraseActions.REMOVE_PHRASE:
            newState.phrases.splice(action.payload, 1);
            break;
        case PhraseActions.REMOVE_COLUMN:
            newState.phrases.forEach(column => column.splice(action.payload, 1));
    }

    return newState;
}

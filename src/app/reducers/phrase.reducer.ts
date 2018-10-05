import { IPhraseState } from '../models/phrase-state.interface';
import * as PhraseActions from './../actions/phrase.actions';

const defaultState: IPhraseState = {
    phrases: []
};

export function phraseReducer(state: IPhraseState = defaultState, action: PhraseActions.Actions) {
    state.phrases = state.phrases.slice(0);

    switch (action.type) {
        case PhraseActions.ADD_PHRASE:
            state.phrases.push(action.payload);
            break;
        case PhraseActions.EDIT_PHRASE:
            state.phrases[action.index] = action.payload;
            break;
        case PhraseActions.REMOVE_PHRASE:
            state.phrases.splice(action.payload, 1);
            break;
        case PhraseActions.REMOVE_COLUMN:
            state.phrases.forEach(column => column.splice(action.payload, 1));
    }

    return state;
}

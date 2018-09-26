import * as PhraseActions from './../actions/phrase.actions';
import { PhraseService } from '../services/phrase.service';

// Section 2
export function phraseReducer(state: string[][] = [], action: PhraseActions.Actions) {
    switch (action.type) {
        case PhraseActions.ADD_PHRASE:
            return [...PhraseService.convert(action.payload, state)];
        case PhraseActions.EDIT_PHRASE:
            return [...PhraseService.convert(action.payload, state, action.index)];
        case PhraseActions.REMOVE_PHRASE:
            state.forEach(column => column.splice(action.payload, 1));
            return [...state];
        case PhraseActions.REMOVE_COLUMN:
            state.splice(action.payload, 1);
            return [...state];
        default:
            return state;
    }
}

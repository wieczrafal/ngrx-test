import { Action } from '@ngrx/store';

export const ADD_PHRASE = '[PHRASE] Add';
export const EDIT_PHRASE = '[PHRASE] Edit';
export const REMOVE_PHRASE    = '[PHRASE] Remove';
export const REMOVE_COLUMN    = '[PHRASE] Remove Column';

export class AddPhrase implements Action {
    readonly type = ADD_PHRASE;

    constructor(public payload: string[]) {}
}

export class EditPhrase implements Action {
    readonly type = EDIT_PHRASE;

    constructor(public payload: string[], public index: number) {}
}

export class RemovePhrase implements Action {
    readonly type = REMOVE_PHRASE;

    constructor(public payload: number) {}
}

export class RemoveColumn implements Action {
    readonly type = REMOVE_COLUMN;

    constructor(public payload: number) {}
}

export type Actions = AddPhrase | EditPhrase | RemovePhrase | RemoveColumn;

import {
  Component,
  Input
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Store } from '@ngrx/store';

import * as PhraseActions from '../../actions/phrase.actions';
import { IAppState } from '../../models/app-state.interface';

@Component({
  selector: 'app-text-cols',
  templateUrl: './text-cols.component.html',
  styleUrls: ['./text-cols.component.scss']
})
export class TextColsComponent {
  @Input() phrases: string[][];

  constructor(
    private _store: Store<IAppState>
  ) { }

  // public editRow(index: number): void {
  //   const phrases = [];
  //   this._currentPhrases.forEach(column => phrases.push(column[index]));
  //   this.form.controls.phrase.setValue(phrases.join(', '));
  //   this.editedRow = index;
  // }

  public deleteRow(index: number): void {
    this._store.dispatch(new PhraseActions.RemovePhrase(index));
    //if (this.editing) this.resetForm();
  }

  public deleteColumn(index: number): void {
    this._store.dispatch(new PhraseActions.RemoveColumn(index));
    //if (this.editing) this.resetForm();
  }
}

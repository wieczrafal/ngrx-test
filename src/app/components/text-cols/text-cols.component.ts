import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import {
  FormControl,
  FormGroup
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import * as PhraseActions from '../../actions/phrase.actions';
import { IAppState } from '../../models/app-state.interface';

@Component({
  selector: 'app-text-cols',
  templateUrl: './text-cols.component.html',
  styleUrls: ['./text-cols.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextColsComponent {
  private _currentPhrases: string[][];

  public editedRow: number = null;
  public get editing() { return this.editedRow !== null; }
  public form: FormGroup = new FormGroup({
    phrase: new FormControl('')
  });
  public phrases: Observable<string[][]>;

  constructor(
    private _store: Store<IAppState>
  ) {
    this.phrases = this._store.select(state => state.phrases).pipe(
      tap(phrases => this._currentPhrases = phrases)
    );
  }

  public onFormSubmit(): void {
    if (this.editing) {
      this._store.dispatch(new PhraseActions.EditPhrase(this.form.value.phrase, this.editedRow));
    } else {
      this._store.dispatch(new PhraseActions.AddPhrase(this.form.value.phrase));
    }

    this.resetForm();
  }

  public editRow(index: number): void {
    const phrases = [];
    this._currentPhrases.forEach(column => phrases.push(column[index]));
    this.form.controls.phrase.setValue(phrases.join(', '));
    this.editedRow = index;
  }

  public deleteRow(index: number): void {
    this._store.dispatch(new PhraseActions.RemovePhrase(index));
    if (this.editing) this.resetForm();
  }

  public deleteColumn(index: number): void {
    this._store.dispatch(new PhraseActions.RemoveColumn(index));
    if (this.editing) this.resetForm();
  }

  private resetForm() {
    this.form.setValue({ phrase: '' });
    this.editedRow = null;
  }
}

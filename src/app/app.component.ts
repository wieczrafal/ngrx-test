import {
  ChangeDetectionStrategy,
  Component,
  ViewChild
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as PhraseActions from './actions/phrase.actions';
import { PhraseEditorComponent } from './components/phrase-editor/phrase-editor.component';
import { IAppState } from './models/app-state.interface';
import { IPhraseState } from './models/phrase-state.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  @ViewChild('editor') editor: PhraseEditorComponent;
  public phrasesState$: Observable<IPhraseState>;

  private _currentPhrases: string[][];
  private _editedRow: number = null;
  private get _editing(): boolean { return this._editedRow !== null; }

  constructor (
    private _store: Store<IAppState>
  ) {
    this.phrasesState$ = this._store.select(state => {
      this._currentPhrases = state.phraseState.phrases;
      return state.phraseState;
    });
  }

  public formSubmit(phrase: string): void {
    const intercepted = phrase.split(',').map(x => x.trim());

    if (this._editing) {
      this._store.dispatch(new PhraseActions.EditPhrase(intercepted, this._editedRow));
    } else {
      this._store.dispatch(new PhraseActions.AddPhrase(intercepted));
    }

    this.reset();
  }

  public editRow(index: number): void {
    this.editor.form.controls.phrase.setValue(this._currentPhrases[index].join(', '));
    this._editedRow = index;
  }

  public deleteRow(index: number): void {
    this._store.dispatch(new PhraseActions.RemovePhrase(index));
    if (this._editing) this.reset();
  }

  public deleteColumn(index: number): void {
    this._store.dispatch(new PhraseActions.RemoveColumn(index));
    if (this._editing) this.reset();
  }

  private reset() {
    this._editedRow = null;
    this.editor.resetForm();
  }
}

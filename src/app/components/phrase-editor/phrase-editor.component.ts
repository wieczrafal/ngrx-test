import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IAppState } from '../../models/app-state.interface';
import * as PhraseActions from '../../actions/phrase.actions';
import { PhraseService } from '../../services/phrase.service';

@Component({
  selector: 'app-phrase-editor',
  templateUrl: './phrase-editor.component.html',
})
export class PhraseEditorComponent {
  public editedRow: number = null;
  public get editing() { return this.editedRow !== null; }
  public form: FormGroup = new FormGroup({
    phrase: new FormControl('', Validators.required)
  });

  constructor(
    private _store: Store<IAppState>
  ) { }

  public onFormSubmit(): void {
    const intercepted = PhraseService.intercept(this.form.value.phrase);

    if (this.editing) {
      this._store.dispatch(new PhraseActions.EditPhrase(intercepted, this.editedRow));
    } else {
      this._store.dispatch(new PhraseActions.AddPhrase(intercepted));
    }

    this.resetForm();
  }

  private resetForm() {
    this.form.setValue({ phrase: '' });
    this.editedRow = null;
  }

}

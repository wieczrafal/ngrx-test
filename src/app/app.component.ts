import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from './models/app-state.interface';
import { Observable } from 'rxjs';
import { IPhraseState } from './models/phrase-state.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public phrasesState$: Observable<IPhraseState>;

  constructor (
    private _store: Store<IAppState>
  ) {
    this.phrasesState$ = this._store.select(state => state.phraseState);
  }
}

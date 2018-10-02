import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { phraseReducer } from './reducers/phrase.reducer';
import { TextColsComponent } from './components/text-cols/text-cols.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { PhraseEditorComponent } from './components/phrase-editor/phrase-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    TextColsComponent,
    StatisticsComponent,
    PhraseEditorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      phraseState: phraseReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { phraseReducer } from './reducers/phrase.reducer';
import { TextColsComponent } from './components/text-cols/text-cols.component';

@NgModule({
  declarations: [
    AppComponent,
    TextColsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      phrases: phraseReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

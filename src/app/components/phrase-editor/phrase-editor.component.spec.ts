import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhraseEditorComponent } from './phrase-editor.component';

describe('PhraseEditorComponent', () => {
  let component: PhraseEditorComponent;
  let fixture: ComponentFixture<PhraseEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhraseEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhraseEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

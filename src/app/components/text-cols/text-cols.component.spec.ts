import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextColsComponent } from './text-cols.component';

describe('TextColsComponent', () => {
  let component: TextColsComponent;
  let fixture: ComponentFixture<TextColsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextColsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextColsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

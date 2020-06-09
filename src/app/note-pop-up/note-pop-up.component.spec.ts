import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotePopUpComponent } from './note-pop-up.component';

describe('NotePopUpComponent', () => {
  let component: NotePopUpComponent;
  let fixture: ComponentFixture<NotePopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotePopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotePopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

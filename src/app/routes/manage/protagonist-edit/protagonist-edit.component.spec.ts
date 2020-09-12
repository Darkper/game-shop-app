import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ManageProtagonistEditComponent} from './protagonist-edit.component';

describe('ProtagonistEditComponent', () => {
  let component: ManageProtagonistEditComponent;
  let fixture: ComponentFixture<ManageProtagonistEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManageProtagonistEditComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProtagonistEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

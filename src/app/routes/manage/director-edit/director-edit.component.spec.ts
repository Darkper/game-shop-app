import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ManageDirectorEditComponent} from './director-edit.component';

describe('DirectorEditComponent', () => {
  let component: ManageDirectorEditComponent;
  let fixture: ComponentFixture<ManageDirectorEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManageDirectorEditComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDirectorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

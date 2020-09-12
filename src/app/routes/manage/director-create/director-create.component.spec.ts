import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ManageDirectorCreateComponent} from './director-create.component';

describe('DirectorCreateComponent', () => {
  let component: ManageDirectorCreateComponent;
  let fixture: ComponentFixture<ManageDirectorCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManageDirectorCreateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDirectorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

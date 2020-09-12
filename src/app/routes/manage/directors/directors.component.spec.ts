import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ManageDirectorsComponent} from './directors.component';

describe('DirectorsComponent', () => {
  let component: ManageDirectorsComponent;
  let fixture: ComponentFixture<ManageDirectorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManageDirectorsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDirectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ManageClientEditComponent} from './client-edit.component';

describe('ClientEditComponent', () => {
  let component: ManageClientEditComponent;
  let fixture: ComponentFixture<ManageClientEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManageClientEditComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageClientEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

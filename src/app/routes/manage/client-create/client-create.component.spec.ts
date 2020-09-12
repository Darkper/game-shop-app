import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ManageClientCreateComponent} from './client-create.component';

describe('ClientCreateComponent', () => {
  let component: ManageClientCreateComponent;
  let fixture: ComponentFixture<ManageClientCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManageClientCreateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageClientCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

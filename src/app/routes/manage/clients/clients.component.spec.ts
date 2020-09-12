import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ManageClientsComponent} from './clients.component';

describe('ClientsComponent', () => {
  let component: ManageClientsComponent;
  let fixture: ComponentFixture<ManageClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManageClientsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

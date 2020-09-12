import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ManageProtagonistsComponent} from './protagonists.component';

describe('ProtagonistsComponent', () => {
  let component: ManageProtagonistsComponent;
  let fixture: ComponentFixture<ManageProtagonistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManageProtagonistsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProtagonistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

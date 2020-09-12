import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ManageGameCreateComponent} from './game-create.component';

describe('GameCreateComponent', () => {
  let component: ManageGameCreateComponent;
  let fixture: ComponentFixture<ManageGameCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManageGameCreateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageGameCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

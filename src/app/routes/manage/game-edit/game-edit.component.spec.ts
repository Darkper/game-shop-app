import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ManageGameEditComponent} from './game-edit.component';

describe('GameEditComponent', () => {
  let component: ManageGameEditComponent;
  let fixture: ComponentFixture<ManageGameEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManageGameEditComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageGameEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

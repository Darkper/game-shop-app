import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ManageProtagonistCreateComponent} from './protagonist-create.component';

describe('ProtagonistCreateComponent', () => {
  let component: ManageProtagonistCreateComponent;
  let fixture: ComponentFixture<ManageProtagonistCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManageProtagonistCreateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProtagonistCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ManageProducerEditComponent} from './producer-edit.component';

describe('ProducerEditComponent', () => {
  let component: ManageProducerEditComponent;
  let fixture: ComponentFixture<ManageProducerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManageProducerEditComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProducerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

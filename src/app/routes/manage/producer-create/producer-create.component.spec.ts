import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ManageProducerCreateComponent} from './producer-create.component';

describe('ProducerCreateComponent', () => {
  let component: ManageProducerCreateComponent;
  let fixture: ComponentFixture<ManageProducerCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManageProducerCreateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProducerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

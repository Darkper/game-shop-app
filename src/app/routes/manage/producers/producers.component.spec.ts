import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ManageProducersComponent} from './producers.component';

describe('ProducersComponent', () => {
  let component: ManageProducersComponent;
  let fixture: ComponentFixture<ManageProducersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManageProducersComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProducersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ManageTechnologyCreateComponent} from './technology-create.component';

describe('TechnologyCreateComponent', () => {
  let component: ManageTechnologyCreateComponent;
  let fixture: ComponentFixture<ManageTechnologyCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManageTechnologyCreateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTechnologyCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

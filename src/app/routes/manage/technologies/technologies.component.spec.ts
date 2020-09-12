import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ManageTechnologiesComponent} from './technologies.component';

describe('TechnologiesComponent', () => {
  let component: ManageTechnologiesComponent;
  let fixture: ComponentFixture<ManageTechnologiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManageTechnologiesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ManageTechnologyEditComponent} from './technology-edit.component';

describe('TechnologyEditComponent', () => {
  let component: ManageTechnologyEditComponent;
  let fixture: ComponentFixture<ManageTechnologyEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManageTechnologyEditComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTechnologyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

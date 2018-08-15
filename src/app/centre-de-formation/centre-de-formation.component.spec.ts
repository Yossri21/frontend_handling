import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentreDeFormationComponent } from './centre-de-formation.component';

describe('CentreDeFormationComponent', () => {
  let component: CentreDeFormationComponent;
  let fixture: ComponentFixture<CentreDeFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentreDeFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentreDeFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

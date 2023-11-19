import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSupervisorsComponent } from './view-supervisors.component';

describe('ViewSupervisorsComponent', () => {
  let component: ViewSupervisorsComponent;
  let fixture: ComponentFixture<ViewSupervisorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewSupervisorsComponent]
    });
    fixture = TestBed.createComponent(ViewSupervisorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

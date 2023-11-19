import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSuperiorsComponent } from './view-superiors.component';

describe('ViewSuperiorsComponent', () => {
  let component: ViewSuperiorsComponent;
  let fixture: ComponentFixture<ViewSuperiorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewSuperiorsComponent]
    });
    fixture = TestBed.createComponent(ViewSuperiorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

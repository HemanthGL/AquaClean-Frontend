import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSuperiorComponent } from './add-superior.component';

describe('AddSuperiorComponent', () => {
  let component: AddSuperiorComponent;
  let fixture: ComponentFixture<AddSuperiorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSuperiorComponent]
    });
    fixture = TestBed.createComponent(AddSuperiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

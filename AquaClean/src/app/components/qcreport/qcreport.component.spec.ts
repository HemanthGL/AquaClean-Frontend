import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QCReportComponent } from './qcreport.component';

describe('QCReportComponent', () => {
  let component: QCReportComponent;
  let fixture: ComponentFixture<QCReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QCReportComponent]
    });
    fixture = TestBed.createComponent(QCReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
